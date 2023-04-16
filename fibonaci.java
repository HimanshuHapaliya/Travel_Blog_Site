import java.util.*;

class fibonaci {
    public static void main(String args[]) {
        int n, i = 0;
        Scanner sc = new Scanner(System.in);
        n = sc.nextInt();
        int a[] = new int[n + 1];
        a[0] = 0;
        a[1] = 1;
        
        while (i <= n) {
            if (i == 0)
            System.out.println(a[0]);
            if (i == 1)
            System.out.println(a[1]);
            if(i>1)
            {
                a[i] = a[i - 1] + a[i - 2];
            }
            
            i++;
        }

        sc.close();
    }
}