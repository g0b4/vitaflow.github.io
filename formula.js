let height = 175;
let weight = 90;
let old = 24;
let sex = "male";
let activity = 1.55;
const weight_category = {
  First_wish: "thin",
  Second_wish: "slim",
  Third_wish: "balance",
  Fourth_wish: "mass",
  Five_wish: "piggy",
};

let wish = weight_category.Five_wish;

// --- Функция расчета формулы Миффлина-Сан-Жеора для калоража

function BMR(height, weight, old, sex, activity) {
  if (sex === "male") {
    return (10 * weight + 6.25 * height - 5 * old + 5) * activity;
  } else if (sex === "female") {
    return (10 * weight + 6.25 * height - 5 * old - 161) * activity;
  }
}

let rounded = Math.round(BMR(height, weight, old, sex, activity));

console.log(rounded); // калораж

// --- Функция расчета ИМТ

function IWT(height, weight) {
  const wh = weight / (height / 100) ** 2;
  if (wh <= 16) return "Выраженный дефицит массы тела";
  else if (wh > 16 && wh <= 17) return "Недостаточная (дефицит) масса тела";
  else if (wh > 17 && wh < 18.5) return "Дефицит массы тела";
  else if (wh >= 18.5 && wh <= 25) return "Норма";
  else if (wh > 25 && wh <= 30) return "Избыточная масса тела (предожирение)";
  else if (wh > 30 && wh <= 35) return "Ожирение первой степени";
  else if (wh > 35 && wh <= 40) return "Ожирение второй степени";
  else if (wh > 40) return "Ожирение третьей степени (морбидное)";
}

const result = IWT(height, weight);

console.log(result); // коэффицент тела

// --- Функция расчета калоража на похудение или набор массы

function WO(rounded, wish) {
  if (wish === "thin") {
    return rounded - rounded * 0.25;
  } else if (wish === "slim") {
    return rounded - rounded * 0.15;
  } else if (wish === "balance") {
    return rounded;
  } else if (wish === "mass") {
    return rounded + rounded * 0.15;
  } else if (wish === "piggy") {
    return rounded + rounded * 0.25;
  }
}

const option_weight = Math.round(WO(rounded, wish));
console.log(option_weight); // опциональный калораж

// --- Функция расчета белка

function ProteinOption(weight, wish) {
  if (wish === "thin") {
    return weight * 0.8 + " грамм(ов) белка";
  } else if (wish === "slim") {
    return weight * 1.0 + " грамм(ов) белка";
  } else if (wish === "balance") {
    return weight * 1.2 + " грамм(ов) белка";
  } else if (wish === "mass") {
    return weight * 1.5 + " грамм(ов) белка";
  } else if (wish === "piggy") {
    return weight * 1.9 + " грамм(ов) белка";
  }
}
const ProteinResult = ProteinOption(weight, wish);
console.log(ProteinResult);

// Для похудения: 30-35% белки, 30-35% жиры, 30-40% углеводы;
// Для поддержания веса: 25-35% белки, 25-35% жиры, 40-50% углеводы;
// Для набора массы: 35-40% белки, 15-25% жиры, 40-60% углеводы. 0,8 г/кг до 1,8 г/ кг
