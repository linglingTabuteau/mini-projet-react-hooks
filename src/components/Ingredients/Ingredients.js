import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList'
import Search from './Search';

const Ingredients = () => {

  const [userIngredients, setUserIngredients] = useState([]);

  const addIngredientsHandler = (ingredient) => {
    setUserIngredients(preUserIngredients => [...preUserIngredients, { id: Math.random().toString(), ...ingredient }])
  }

  const onRemoveItemHandler = (id) => {
    // let newUserIngredients = userIngredients.filter(userIngredient => userIngredient.id !== id)
    setUserIngredients(preUserIngredients => preUserIngredients.filter(userIngredient => userIngredient.id !== id));
  }

  return (
    <div className="App">
      <IngredientForm
        addIngredients={addIngredientsHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={(id) => onRemoveItemHandler(id)} />
      </section>
    </div>
  );
}

export default Ingredients;
