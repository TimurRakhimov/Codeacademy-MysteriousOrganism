// Returns a random DNA base
const returnRandBase = () => {
     const dnaBases = ['A', 'T', 'C', 'G']
     return dnaBases[Math.floor(Math.random() * 4)] 
   }
   
   // Returns a random single strand of DNA containing 15 bases
   const mockUpStrand = () => {
     const newStrand = []
     for (let i = 0; i < 15; i++) {
       newStrand.push(returnRandBase())
     }
     return newStrand
   }
   
   function pAequorFactory(number, arr) {
     return {
       specimenNum: number,
       dna: arr,
       mutate() {
         return this.dna[Math.floor(Math.random() * 15)] = returnRandBase();
       },
       compareDNA(obj) {
         let res = 0;
         for (let i = 0; i < this.dna.length; i++) {
           if (this.dna[i] === obj.dna[i]) {
             res += 1;
           }
         }
         res = Math.floor((res/this.dna.length) * 100);
         console.log(`Specimen #${this.specimenNum} and speciment #${obj.specimenNum} have ${res}% DNA in common`);
       },
       willLikelySurvive() {
         let sum = 0;
         for (let i = 0; i < this.dna.length; i++) {
           if (this.dna[i] === 'C' || this.dna[i] === 'G') {
             sum += 1;
           }
         }
         if (sum >= 9) {
           return true;
         } else {
           return false;
         }
       },
     };
   }
   
   const first = pAequorFactory(1, mockUpStrand());
   const second = pAequorFactory(2, mockUpStrand());
   
   console.log(first);
   first.mutate();
   console.log(first);
   console.log(second);
   first.compareDNA(second);
   console.log(first.willLikelySurvive());
   