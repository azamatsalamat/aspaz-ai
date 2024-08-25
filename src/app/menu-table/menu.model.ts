export interface WeeklyMenu{
    day: string,
    data: DailyMenu[]
}

export interface DailyMenu{
    serving: string,
    meal: string,
    ingredients: string,
    calories: number,
    carbs: number,
    proteins: number,
    fats: number
}