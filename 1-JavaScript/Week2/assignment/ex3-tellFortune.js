function selectRandomly(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

export function tellFortune(numKids, partnerNames, locations, jobTitles) {
  const numKid = selectRandomly(numKids);
  const partnerName = selectRandomly(partnerNames);
  const location = selectRandomly(locations);
  const jobTitle = selectRandomly(jobTitles);
  return `You will be a ${jobTitle} in ${location}, married to ${partnerName} with ${numKid} kids.`;
}

function main() {
  const numKids = [1, 3, 4, 2, 5];

  const partnerNames = ['Luna', 'Daisy', 'Iris', 'Flora', 'Lily'];

  const locations = [
    'Netherlands',
    'Germany',
    'USA',
    'United Kingdom',
    'Spain',
  ];

  const jobTitles = [
    'FullStack Web Developer',
    'FrontEnd Developer',
    'BackEnd Developer',
    'Software Engineer',
    'Tester',
  ];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

// ! Do not change or remove the code below
if (process.env.NODE_ENV !== 'test') {
  main();
}
