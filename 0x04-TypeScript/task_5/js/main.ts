// task_5/js/main.ts
interface MajorCredits {
  brand: "major";
  credits: number;
}

interface MinorCredits {
  brand: "minor";
  credits: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { brand: "major", credits: subject1.credits + subject2.credits };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { brand: "minor", credits: subject1.credits + subject2.credits };
}
