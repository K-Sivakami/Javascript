import java.util.Scanner;
public class FactorsOfnum {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
       int num;
       Scanner sc=new Scanner(System.in);
       System.out.println("Enter the number:");
       num=sc.nextInt();
       for(int i=1;i<=num;i++)
       {
    	   if(num%i==0)
    	   {
    		   System.out.println(i);
    	   }  
       }
       
       System.out.println(" ");
	}

}
