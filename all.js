const bmiStatesData = {
  overThin: {
    state: "過輕",
    color: "藍色",
  },
  normal: {
    state: "正常",
    color: "紅色",
  },
  overWeight: {
    state: "過重",
    color: "澄色",
  },
  mildFat: {
    state: "輕度肥胖",
    color: "黃色",
  },
  moderateFat: {
    state: "中度肥胖",
    color: "黑色",
  },
  severeFat: {
    state: "重度肥胖",
    color: "綠色",
  },
};

const bmiHistoryData = [];
function printBmi(height, weight) {
  let bmi = Number((weight / (height / 100) ** 2).toFixed(2));
  let status = "";
  if (typeof height !== "number" || typeof weight !== "number") {
    console.log(`您的數值輸入錯誤，請重新輸入`);
  } else if (bmi < 18.5) {
    saveBmiResult(bmi, "overThin");
  } else if (bmi >= 18.5 && bmi < 24) {
    saveBmiResult(bmi, "normal");
  } else if (bmi >= 24 && bmi < 27) {
    saveBmiResult(bmi, "overWeight");
  } else if (bmi >= 27 && bmi < 30) {
    saveBmiResult(bmi, "mildFat");
  } else if (bmi >= 30 && bmi < 35) {
    saveBmiResult(bmi, "moderateFat");
  } else if (bmi >= 35) {
    saveBmiResult(bmi, "severeFat");
  }
}

function saveBmiResult(bmi, status) {
  let obj = {};
  obj.bmi = bmi;
  obj.state = bmiStatesData[status].state;
  obj.color = bmiStatesData[status].color;
  bmiHistoryData.push(obj);
  console.log(
    `您的體重${bmiStatesData[status].state}，健康指數為${bmiStatesData[status].color}`
  );
}

function showHistoryData() {
  let dataLength = bmiHistoryData.length;
  let lastIndex = bmiHistoryData.length - 1;
  console.log(
    `您總共計算 ${dataLength} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[lastIndex].bmi}，體重${bmiHistoryData[lastIndex].state}！健康指數為${bmiHistoryData[lastIndex].color}！`
  );
}

// 第一階段 -> OK
// printBmi(178, 20); // >> 印出 console.log 文字為「您的體重過輕」
// printBmi(178, 70); // >> 印出 console.log 文字為「您的體重正常」
// printBmi(178, 85); // >> 印出 console.log 文字為「您的體重過重」
// printBmi(178, 90); // >> 印出 console.log 文字為「您的體重輕度肥胖」
// printBmi(178, 110); // >> 印出 console.log 文字為「您的體重中度肥胖」
// printBmi(178, 130); // >> 印出 console.log 文字為「您的體重重度肥胖」
// printBmi("身高", "體重"); // >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第二階段 -> OK
// printBmi(178, 20); // >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
// printBmi(178, 70); // >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
// printBmi(178, 85); // >> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
// printBmi(178, 90); // >> 印出 console.log 文字為「您的體重輕度肥胖，健康指數為黃色」
// printBmi(178, 110); // >> 印出 console.log 文字為「您的體重中度肥胖，健康指數為黑色」
// printBmi(178, 130); // >> 印出 console.log 文字為「您的體重重度肥胖，健康指數為綠色」
// printBmi("身高", "體重"); // >> 印出 console.log 文字為「您的數值輸入錯誤，請重新輸入」

// 第三階段 -> OK
printBmi(178, 20); // >> 印出 console.log 文字為「您的體重過輕，健康指數為藍色」
printBmi(178, 70); // >> 印出 console.log 文字為「您的體重正常，健康指數為紅色」
printBmi(178, 85); // >> 印出 console.log 文字為「您的體重過重，健康指數為澄色」
showHistoryData(); // >> 印出 console.log 文字為「您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！」

// 體重過輕 BMI < 18.5
// 體重正常 18.5 <= BMI < 24
// 體重過重 24 <= BMI < 27
// 體重輕度肥胖 27 <= BMI < 30
// 體重中度肥胖 30 <= BMI < 35
// 體重重度肥胖 BMI >= 35
