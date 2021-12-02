foodList.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        
        class: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        
        food_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        carb_count: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        protein_count: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        fat_count: {
            type: DataTypes.STRING,
            allowNull: false,

        },

        calories_count: {
            type: DataTypes.STRING,
            allowNull: false,

        },


    }
)