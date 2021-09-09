/**
 * 基本
 */
// 每次刷新时清空控制台
console.clear();
const notPasswd = ["CLICK GENERATE", "点击生成", "请至少选择一类字符！"];
const isPasswd = (passwd) => passwd && !notPasswd.includes(passwd); 


/**
 * 滑条相关
 */
// 选择相关元素
const slider = document.querySelector(".range__slider");
const sliderValue = document.querySelector(".length__title");

// 为滑条元素绑定时间并初始化状态
slider.querySelector("input").addEventListener("input", event => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});
applyFill(slider.querySelector("input"));

// 滑条元素的属性更新函数
function applyFill(slider) {
	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, var(--slider-filled) ${percentage}%, 
		var(--slider-unfill) ${percentage + 0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
}


/**
 * 选择必要的元素以备使用
 */
// 显示生成结果的文本框
const resultEl = document.getElementById("result");
// 用来设置生成长度的滑动条
const lengthEl = document.getElementById("slider");

// 生成选项的复选框
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("number");
const symbolEl = document.getElementById("symbol");

// 其他元素
const generateBtn = document.getElementById("generate");
const copyBtn = resultEl;
// const resultContainer = document.querySelector(".result");
const copyInfo = document.querySelector(".result__info.right");
const copiedInfo = document.querySelector(".result__info.left");


/**
 * 绑定事件
 */
// 将生成的密码复制到剪贴板
copyBtn.addEventListener("click", () => {
	const textarea = document.createElement("textarea");
	const password = resultEl.innerText;
	if (!password || notPasswd.includes(password)) {
		callGenerator();
		return;
	}
	textarea.value = password;
	document.body.appendChild(textarea);
	textarea.select();
	document.execCommand("copy");
	textarea.remove();

	copyInfo.style.transform = "translateY(200%)";
	copyInfo.style.opacity = "0";
	copiedInfo.style.transform = "translateY(0%)";
	copiedInfo.style.opacity = "0.75";
});

// 点击生成密码按钮逻辑
const callGenerator = () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl.checked;
	const hasUpper = uppercaseEl.checked;
	const hasNumber = numberEl.checked;
	const hasSymbol = symbolEl.checked;
	resultEl.innerText = generatePassword(length, hasLower, hasUpper, hasNumber, hasSymbol);
	if (!notPasswd.includes(resultEl.innerText)) {
		copyInfo.style.transform = "translateY(0%)";
		copyInfo.style.opacity = "0.75";
	}
	copiedInfo.style.transform = "translateY(200%)";
	copiedInfo.style.opacity = "0";
};
generateBtn.addEventListener("click", callGenerator);


/**
 * 生成密码逻辑
 */
// 随机密码生成函数
function generatePassword(length, lower, upper, number, symbol) {
	let generatedPassword = "";
	const typesCount = lower + upper + number + symbol;
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
	if (typesCount === 0) return notPasswd[2];
	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length);
}

// 生成字符工具函数
const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
	const symbols = '~!@#$%^&*()_+{}":?><;.,';
	return symbols[Math.floor(Math.random() * symbols.length)];
}