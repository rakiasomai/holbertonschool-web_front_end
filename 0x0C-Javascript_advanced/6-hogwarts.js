function studentHogwarts() {

    const changeScoreBy = points => privateScope += points;
    let privateScope = 0;
    name = null;
  
    this.setName = newName => name = newName;
    this.rewardStudent = () => changeScoreBy(1);
    this.penalizeStudent = () => changeScoreBy(-1);
  
    this.getScore = () => `${name}: ${privateScope}`;
  }
  
  let harry = new studentHogwarts();
  let draco = new studentHogwarts();
  
  harry.setName('Harry');
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  console.log(harry.getScore());
  
  
  draco.setName('Draco');
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  console.log(draco.getScore());