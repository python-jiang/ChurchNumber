interface ChurchNum{ function func(function f); }
interface function{ fun func(fun f); }
interface fun{ double f(double x); }
public class ChurchNumber {
    static ChurchNum add(ChurchNum num1, ChurchNum num2){
        return f-> x-> num1.func(f).func((num2.func(f).func(x)));
    }
    public static void main(String[] args){
        ChurchNum one = f->x->f.func(x);
        ChurchNum two = add(one, one);
        ChurchNum four = add(two, two);
        ChurchNum eight = add(four, four);
        ChurchNum ten = add(eight, two);

        // 先把一阶求导算符化为高阶求导算符，再作用到原函数上，直接得出高阶导数
        function d = f->{
            double delta = 0.0000001;
            return x-> (f.f(x + delta) - f.f(x))/delta;
        };
        fun f1 = x -> x*x*x;
        function dd = two.func(d);
        fun ddf1 = dd.func(f1);
        System.out.println("f(x)=x*x*x 的二阶导数，在x=1处的值=" + ddf1.f(1));

        // 3*1+1 = 4、3*4+1 = 13、3*13+1 = 40、3*40 + 1 = 121
        d = g -> x -> 3*g.f(x)+1;
        fun f2 = x -> x;
        dd = two.func(d);
        fun ddf2 = dd.func(f2);
        System.out.println("f(x)=3*x+1 迭代两次，在x=1处的值=" + ddf2.f(1));

        function dddd = four.func(d);
        fun ddddf2 = dddd.func(f2);
        System.out.println("f(x)=3*x+1 迭代4次，在x=1处的值=" + ddddf2.f(1));

        // 牛顿法迭代求: 求ori的平方根倒数.迭代的初值选为0.1，迭代10次
        double ori = 16;
        d = y -> x -> y.f(x)*(3-ori*y.f(x)*y.f(x))/2.0;
        fun f3 = x -> x;
        function tend = ten.func(d);
        fun tendf3 = tend.func(f3);
        System.out.println(ori + "的平方根倒数=" + tendf3.f(0.1));
    }
}
