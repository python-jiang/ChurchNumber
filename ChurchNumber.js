var zero = function(f){return function(x){return x}}
var plusone = function(num){return function(f){return function(x){return f((num(f))(x))}}}
var f = function(x){return 3*x + 1}

var zerof = zero(f)
console.log(zerof(1))//输出1=1
console.log(zerof(2))//输出2=2
console.log(zerof(3))//输出3=3
console.log()//换行

var one = plusone(zero)
var onef = one(f)
console.log(onef(1))//输出4=3*1+1
console.log(onef(2))//输出7=3*2+1
console.log(onef(3))//输出10=3*3+1
console.log()//换行

var two = plusone(one)
var twof = two(f)
console.log(twof(1))//输出13=4*1+1
console.log(twof(2))//输出22=7*1+1
console.log(twof(3))//输出31=10*1+1
console.log()//换行

var plus = function(num1, num2){return function(f){return function(x){return (num1(f))((num2(f))(x))}}}
var three = plus(one, two)
var threef = three(f)
console.log(threef(1))//输出40=3*13+1
console.log(threef(2))//输出67=3*22+1
console.log(threef(3))//输出94=3*31+1
console.log()//换行

var six = plus(three, three)
var sixf = six(f)
console.log(sixf(1))//输出1093
console.log(sixf(2))//输出1822
console.log(sixf(3))//输出2551
console.log()//换行

var eight = three(two)//这是2的3次方
var eightf = eight(f)
console.log(eightf(1))//输出9841
console.log(eightf(2))//输出16402
console.log(eightf(3))//输出22963
console.log()//换行

var nine = two(three)//这是3的2次方
var ninef = nine(f)
console.log(ninef(1))//输出29524
console.log(ninef(2))//输出49207
console.log(ninef(3))//输出68890
console.log()//换行

var sixteen = two(two(two))//这是16=2^2^2
var sixteenf = sixteen(f)
console.log(sixteenf(1))//输出64570081
console.log(sixteenf(2))//输出107616802
console.log(sixteenf(3))//输出150663523
console.log()//换行

var x = 4
var g = function(y){return y*(3-x*y*y)/2.0}//牛顿法求x的平方根倒数
var eightg = eight(g)//迭代8次
var y = 0.1//随便选个初值
console.log(eightg(y))//结果0.499999很接近0.5了
console.log()//换行

var times512 = three(eight)//如果你想迭代512次
var x = 16
var g = function(y){return y*(3-x*y*y)/2.0}//牛顿法求x的平方根倒数
var times512g = times512(g)
var y = 0.1//随便选个初值
console.log(times512g(y))//结果0.25非常精确
console.log()//换行