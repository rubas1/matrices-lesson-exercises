matrix = require(Matrix)

class EmployeeMatrix extends matrix{
    constructor(rows, cols){
        super(rows, cols)
    }

    loadData(salaryData){
        let matrix = []
        let num = 1
        for (let r = 0; r < salaryData.length; r++) {
            matrix.push([])
            for (let c = 0; c < salaryData[r].length; c++) {
                matrix[r].push(salaryData[r][c])
            }
        }
        this.arr = matrix
    }
}


/* Do not remove the exports below */
module.exports = EmployeeMatrix