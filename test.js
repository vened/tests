// 1) Создать 30 матриц 3*3 и заполнить их не повторяющимися числами от 1 до 9 в случайном порядке [[3,6,8],[1,9,2],[4,7,5]]*30
// 2) Посчитать сумму строк в каждой матрице [[3,6,8],[1,9,2],[4,7,5]] 17,12,16
// 3) Вывести только уникальные суммы строк (не повторяющиеся)

function getRandom(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getSequence(length, obj) {
	if (obj.length < length) {
		var item = getRandom(1, 10);
		if (obj.indexOf(item) === -1) {
			obj.push(item);
		}
		getSequence(length, obj);
	}
	return obj;
}

function reduceMap() {
	var sequence = getSequence(9, []);
	var arr = [];
	for (var j = 0; j < 3; j++) {
		arr[j] = [];
		for (var i = 0; i < 3; i++) {
			arr[j].push(sequence.shift());
		}
	}
	return arr;
}

function createMatrix(size) {
	var matrix = [];
	for (var i = 0; i < size; i++) {
		matrix[i] = reduceMap(3, 3);
	}
	return matrix;
}

function counts(matrix) {
	var countMatrix = [];
	for (var i = 0; i < matrix.length; i++) {
		var lineMatrix = matrix[i];
		var lineSum = [];
		for (var j = 0; j < lineMatrix.length; j++) {
			var lineSumItem = lineMatrix[j].reduce(function (previousValue, currentValue) {
				return previousValue + currentValue;
			});
			lineSum.push(lineSumItem);
		}
		var countMatrixItem = lineSum.join(', ');
		if (countMatrix.indexOf(countMatrixItem) === -1) {
			countMatrix.push(countMatrixItem);
		}
	}
	return countMatrix;
}

var matrix = createMatrix(30);

console.log(counts(matrix));
