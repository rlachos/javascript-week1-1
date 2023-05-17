function boredom(staff){
  
    let assessmentScore = {
      accounts : 1,
      finance : 2,
      canteen : 10,
      regulation : 3,
      trading : 6,
      change : 6,
      IS : 8,
      retail : 5,
      cleaning : 4,
      "pissing about" : 25
    };
      
      let sumScore = 0;
      
      for (let key in staff) {
            let department = staff[key];
            let score = assessmentScore[department];
            sumScore = sumScore + score
        }
      
      if (sumScore  <= 80) {
        return 'kill me now';
      } else if (sumScore  > 80 && sumScore  < 100) {
        return 'i can handle this';
      } else {
        return 'party time!!';
      }
      
    }