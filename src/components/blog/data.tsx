export const mails = [
  {
    id: '6c84fb90-12c4-11e1-840d-7b25c5ee775a',
    name: 'Tech Author',
    email: 'Hindustan Times',
    subject: 'Nvidia Leading AI',
    text: `At Nvidia's annual developer conference on Monday, Chief Executive Jensen Huang unveiled a series of announcements aimed at maintaining the chip maker's leadership in the artificial-intelligence industry. Taking the stage at a hockey arena in the heart of Silicon Valley, Huang introduced Nvidia's newest chip, boasting speeds up to 30 times faster in certain tasks compared to its predecessor. Additionally, he outlined a fresh suite of software tools aimed at assisting developers in efficiently marketing AI models to companies leveraging technology from Nvidia. The company's clientele comprises the majority of the world's largest technology firms. 
 
 
    `,
    date: '2023-10-22T09:00:00',
    read: true,
    labels: ['AI/ML', 'Tech', 'Future'],
  },
  {
    id: '110e8400-e29b-11d4-a716-446655440000',
    name: 'Alice Smith',
    email: 'alicesmith@example.com',
    subject: 'Neura Link: Tesla',
    text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
    date: '2023-10-22T10:30:00',
    read: true,
    labels: ['Tech', 'Future'],
  },
  {
    id: '3e7c3f6d-bdf5-46ae-8d90-171300f27ae2',
    name: 'Bob Johnson',
    email: 'bobjohnson@example.com',
    subject: 'Immersive Tech and Challenging AI',
    text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
    date: '2023-04-10T11:45:00',
    read: true,
    labels: ['Intel'],
  },
  {
    id: '61c35085-72d7-42b4-8d62-738f700d4b92',
    name: 'Emily Davis',
    email: 'emilydavis@example.com',
    subject: 'World towards 6G',
    text: "I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.\n\nI've reviewed the budget report and identified a few areas where we might be able to optimize our spending without compromising the project's quality.\n\nI've attached a detailed analysis for your reference. Let's discuss this further in our next meeting.\n\nThanks, Emily",
    date: '2023-03-25T13:15:00',
    read: false,
    labels: ['Tech', 'budget'],
  },
  {
    id: '8f7b5db9-d935-4e42-8e05-1f1d0a3dfb97',
    name: 'Michael Wilson',
    email: 'michaelwilson@example.com',
    subject: 'Important Tech Announcement',
    text: "I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch. We've received valuable feedback from our beta testers, and I believe it's time to make some adjustments to better meet our customers' needs.\n\nThis change is crucial to our success, and I look forward to discussing it with the team. Please be prepared to share your insights during the meeting.\n\nRegards, Michael",
    date: '2023-03-10T15:00:00',
    read: false,
    labels: ['AI/ML', 'Tech', 'Future'],
  },
];

export type Mail = (typeof mails)[number];

export const accounts = [
  {
    label: 'Alicia Koch',
    email: 'alicia@example.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Vercel</title>
        <path d="M24 22.525H0l12-21.05 12 21.05z" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@gmail.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>Gmail</title>
        <path
          d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    label: 'Alicia Koch',
    email: 'alicia@me.com',
    icon: (
      <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <title>iCloud</title>
        <path
          d="M13.762 4.29a6.51 6.51 0 0 0-5.669 3.332 3.571 3.571 0 0 0-1.558-.36 3.571 3.571 0 0 0-3.516 3A4.918 4.918 0 0 0 0 14.796a4.918 4.918 0 0 0 4.92 4.914 4.93 4.93 0 0 0 .617-.045h14.42c2.305-.272 4.041-2.258 4.043-4.589v-.009a4.594 4.594 0 0 0-3.727-4.508 6.51 6.51 0 0 0-6.511-6.27z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export type Account = (typeof accounts)[number];

export const contacts = [
  {
    name: 'Emma Johnson',
    email: 'emma.johnson@example.com',
  },
  {
    name: 'Liam Wilson',
    email: 'liam.wilson@example.com',
  },
  {
    name: 'Olivia Davis',
    email: 'olivia.davis@example.com',
  },
  {
    name: 'Noah Martinez',
    email: 'noah.martinez@example.com',
  },
  {
    name: 'Ava Taylor',
    email: 'ava.taylor@example.com',
  },
  {
    name: 'Lucas Brown',
    email: 'lucas.brown@example.com',
  },
  {
    name: 'Sophia Smith',
    email: 'sophia.smith@example.com',
  },
  {
    name: 'Ethan Wilson',
    email: 'ethan.wilson@example.com',
  },
  {
    name: 'Isabella Jackson',
    email: 'isabella.jackson@example.com',
  },
  {
    name: 'Mia Clark',
    email: 'mia.clark@example.com',
  },
  {
    name: 'Mason Lee',
    email: 'mason.lee@example.com',
  },
  {
    name: 'Layla Harris',
    email: 'layla.harris@example.com',
  },
  {
    name: 'William Anderson',
    email: 'william.anderson@example.com',
  },
  {
    name: 'Ella White',
    email: 'ella.white@example.com',
  },
  {
    name: 'James Thomas',
    email: 'james.thomas@example.com',
  },
  {
    name: 'Harper Lewis',
    email: 'harper.lewis@example.com',
  },
  {
    name: 'Benjamin Moore',
    email: 'benjamin.moore@example.com',
  },
  {
    name: 'Aria Hall',
    email: 'aria.hall@example.com',
  },
  {
    name: 'Henry Turner',
    email: 'henry.turner@example.com',
  },
  {
    name: 'Scarlett Adams',
    email: 'scarlett.adams@example.com',
  },
];

export type Contact = (typeof contacts)[number];
