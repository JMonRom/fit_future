import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveFoodIds, getSavedFoodIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { SAVE_FOOD } from '../utils/mutations';
import food from '../utils/APIfood';

const SearchFoods = () => {
  const [searchedFoods, setSearchedFoods ] = useState([]);
  const [searchInput, setSearchInput ] = useState('');
  const [savedFoodIds, setSavedFoodIds] = useState(getSavedFoodIds());

  const [ saveFood, { error }] = useMutation(SAVE_FOOD);

  useEffect(() => {
    return () => saveFoodIds(savedFoodIds);
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }



    try {
      const response = await fetch(
        `https://www.mynetdiary.com/foodSearch.do?q=${searchInput}`
      )


      if(!response.ok) {
        throw new Error('Something went wrong!');
      }

      const { items } = await response.json();

      // change and add depending on data from API
      const foodData = items.map((food) => ({
        foodId: food
        // finish including other API data
      })); 

      setSearchedFoods(foodData);
      setSearchInput('');
    } catch (err) {
      console.error(err)
    }
  };

  const handleSaveFood = async (foodId) => {
    const foodToSave = searchedFoods.find((food) => food.foodId === foodId);

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if(!token) {
      return false;
    }

    try {
      const { data } = await saveFood({
        variables: { newFood: {...foodToSave}},
      });
      
      setSavedFoodIds([...savedFoodIds, foodToSave.foodID]);
  } catch(err) {
    console.error(err);
  }
};

  return (
    <>
    <Jumbotron fluid className = 'text-light bg-dark'>
      <Container>
        <h1> Search Your Food!</h1>
        <Form onSubmit={handleFormSubmit}>
        <Form.Row>
          <Col xs={12} md={8}>
            <Form.Control 
              name= 'searchInput'
              value= {searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              type='text'
              size='lg'
              placeholder='Search for Food'
            />
          </Col>
          <Col xs={12} md={4}>
              <Button type='submit' variant='success' size='lg'>
                  Submit Search
              </Button>
          </Col>
        </Form.Row>
        </Form>
      </Container>
    </Jumbotron> 

    <Container>
        <h2>
          {searchedFoods.length
            ? `Viewing ${searchedFoods.length} results:`
            : 'Search for a food item to start'}
        </h2>
        <CardColumns>
          {searchedFoods.map((book) => {
            return (
              // change ".image", ".title" to correlate with our API
              <Card key={food.foodId} border='dark'>
                {food.image ? (
                  <Card.Img src={food.image} alt={`The cover for ${food.title}`} variant='top' />
                ) : null}
                <Card.Body>
                  {/* change ".entry", ".calories", ".fat" */}
                  <Card.Title>{food}</Card.Title>
                  <Card.Text>
                  <p className='small'>Calories:  {food}</p>
                  <p className='small'>Total Fat: {food}</p>
                  <p className='small'>Sugar: {food}</p>
                  <p className='small'>Carbs: {food}</p>
                  </Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      disabled={saveFoodIds?.some((savedFoodId) => savedFoodId === food.foodId)}
                      className='btn-block btn-info'
                      onClick={() => handleSaveFood(food.foodId)}>
                      {savedFoodIds?.some((savedFoodId) => savedFoodId === food.foodId)
                        ? 'This food has already been saved!'
                        : 'Save this Food Entry!'}
                    </Button>
                  )}
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
}

export default SearchFoods;