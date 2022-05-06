pragma circom 2.0.0;

template Multiplier2 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;  
   signal output c;  

   // Constraints.  
   c <== a * b;  
}

template Multiplier3 () {  

   // Declaration of signals.  
   signal input a;  
   signal input b;
   signal input c;
   signal output d;  

   component part1 = Multiplier2();
   component part2 = Multiplier2();
   part1.a <== a;
   part1.b <== b;
   part2.a <== part1.c;
   part2.b <== c;
   d <== part2.a * part2.b;
}

component main = Multiplier3();