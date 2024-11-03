function getGrade(score) {
    if (score >= 100)
      return 'A++';
      else if (score >= 90) {
        return 'A'
      } else if ( score >=80) {
        return 'B'
      } else if (score >=70) {
        return 'C'
      } else if ( score >=60) {
        return 'D'
      } else return'F'
    }
  console.log(getGrade(94));
  console.log(getGrade(82));
  console.log(getGrade(56));