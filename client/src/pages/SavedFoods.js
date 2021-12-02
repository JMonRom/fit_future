import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';
import Auth from '../utils/auth';

import { removeFoodId } from '../utils/localStorage';
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { REMOVE_FOOD } from '../utils/mutations';
import food from '../utils/APIfood'

const SavedFoods = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeFood, { error }] = useMutation(REMOVE_FOOD);
  const userData = data?.me || {};

  const handleDeleteFood = async (foodId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeFood({
        variables: { foodId },
      });

      removeFoodId(foodId);
    } catch(err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2> LOADING PLEASE WAIT...</h2>
  }

  return (
    <>
    <Jumbotron fluid className='text-light bg-dark'>
      <Container>
        <h1>Viewing Saved Foods!</h1>
      </Container>
    </Jumbotron>
    <Container>
      <h2>
        {userData.savedFoods.length
          ? `Viewing ${userData.savedFoods.length} saved ${userData.savedFoods.length === 1 ? 'book' : 'books'}:`
          : 'You have no saved foods!'
        }
      </h2>
      <CardColumns>
        {/* replace ".image", ".name"  */}
        {userData.savedFoods.map((book) => {
          return (
            <Card key={food.foodId} border='dark'>
              {food.image ? <Card.Img src={food.image}
              alt={`The food entry for ${food.name}`}
              variant='top' /> :null }
              <Card.Body>
                <Card.Title>
                  {food.title}
                </Card.Title>
                <Card.Text>
                  <p className='small'>Calories: {food.calories}</p>
                  <p className='small'>Total Fat: {food.fat}</p>
                  <p className='small'>Sugar: {food.sugar}</p>
                  <p className='small'>Carbs: {food.carbs}</p>
                </Card.Text>
                <Button className='btn-block btn-danger' onClick={() => handleDeleteFood(food.foodId)}>
                  Delete Food Entry!
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </CardColumns>
    </Container>
    </>
  );
};

export default SavedFoods;