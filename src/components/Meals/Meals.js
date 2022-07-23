import { Fragment } from "react";

import Available from "./AvailableMeals";
import MealsSummery from "./MealsSummery";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummery />
            <Available />
        </Fragment>
    );
};

export default Meals;