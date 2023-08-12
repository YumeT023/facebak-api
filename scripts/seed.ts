import {hashSync} from "bcrypt";
import {PrismaClient, ReactionType} from "@prisma/client";

const users = [
  {
    id: "9b12d8e1-75b4-44e9-939f-e35807a27d35",
    email: "ahamshar0@seattletimes.com",
    password: "nF8$h\\sw",
    username: "slindemann0",
    bio: "deploy B2B networks",
    photo: "https://robohash.org/autlaudantiumeveniet.png?size=50x50&set=set1",
  },
  {
    id: "01579c39-b336-492e-ad82-34d81debff9d",
    email: "bbresner1@fema.gov",
    password: "kL5~MN<9=pjqzC",
    username: "gpridie1",
    bio: "implement visionary paradigms",
    photo: "https://robohash.org/delectuslaborecommodi.png?size=50x50&set=set1",
  },
  {
    id: "de5b5a7f-d145-45a3-b0a1-ae2b5bb330fc",
    email: "mwithringten2@shutterfly.com",
    password: "gK9}<AaR!",
    username: "bboldt2",
    bio: "productize end-to-end web services",
    photo: "https://robohash.org/voluptatequidemiste.png?size=50x50&set=set1",
  },
  {
    id: "135710e0-b497-420f-b897-ff4881cb0543",
    email: "kstaley3@nature.com",
    password: "aL2&3F~Xa(",
    username: "zcottam3",
    bio: "repurpose turn-key web services",
    photo: "https://robohash.org/saepenisiconsequatur.png?size=50x50&set=set1",
  },
  {
    id: "06b9add3-4711-4778-a7c4-89e481171cf4",
    email: "adeeth4@exblog.jp",
    password: "nG7,ot)6}nq$t($",
    username: "enoweak4",
    bio: "architect dynamic e-business",
    photo: "https://robohash.org/expeditaveniamofficia.png?size=50x50&set=set1",
  },
  {
    id: "dba4ab07-b011-4918-9482-b4e17a957cac",
    email: "cmerricks5@abc.net.au",
    password: 'iG7|z,_!m~}?"XR',
    username: "scobon5",
    bio: "recontextualize out-of-the-box paradigms",
    photo: "https://robohash.org/nisinesciuntveniam.png?size=50x50&set=set1",
  },
  {
    id: "839bfe17-a585-42b6-bf41-8bb646ea7192",
    email: "sstrettle6@pbs.org",
    password: "aC6}iwJcGnklpwD3",
    username: "ebosma6",
    bio: "cultivate value-added relationships",
    photo: "https://robohash.org/rerumimpeditnecessitatibus.png?size=50x50&set=set1",
  },
  {
    id: "2a92cb0d-0292-4cac-a3d3-fee8048223b6",
    email: "mgowthrop7@macromedia.com",
    password: "wF7}rHWDfJWjYo",
    username: "yfitzjohn7",
    bio: "optimize proactive e-services",
    photo: "https://robohash.org/atqueculpavoluptate.png?size=50x50&set=set1",
  },
  {
    id: "9b5395e2-6ff9-4ae8-83f4-c3529c249710",
    email: "alettuce8@admin.ch",
    password: "tB3{</02",
    username: "dbofield8",
    bio: "enhance plug-and-play methodologies",
    photo: "https://robohash.org/commodifacerealias.png?size=50x50&set=set1",
  },
  {
    id: "8dbf81a4-8519-467e-9ba8-03eff9e7adc5",
    email: "bingerman9@wisc.edu",
    password: "eT8%@sq4\\",
    username: "lcesaric9",
    bio: "repurpose killer bandwidth",
    photo: "https://robohash.org/sedutquis.png?size=50x50&set=set1",
  },
].map((u) => ({...u, password: hashSync(u.password, 10)}));

const posts = [
  {
    id: "90641299-fc95-4862-a4fd-46213535a776",
    userId: "9b12d8e1-75b4-44e9-939f-e35807a27d35",
    title: "Cat and Dog",
    content:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  },
  {
    id: "fc00e809-794f-49aa-bcb3-856e0307e09b",
    userId: "9b12d8e1-75b4-44e9-939f-e35807a27d35",
    title: "A Second Chance",
    content:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
  },
  {
    id: "203d4058-f2f1-4a09-9eb2-14832d3953fc",
    userId: "01579c39-b336-492e-ad82-34d81debff9d",
    title: "Vanishing on 7th Street",
    content:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
  },
  {
    id: "9a39a850-103d-41b1-9daa-019dc3df436e",
    userId: "01579c39-b336-492e-ad82-34d81debff9d",
    title: "Forbidden Planet",
    content:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  },
  {
    id: "c3696ecd-20cb-4839-8b1b-e3454d2da9d0",
    userId: "8dbf81a4-8519-467e-9ba8-03eff9e7adc5",
    title: "Life Is All You Get",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
  {
    id: "3eff1d99-6bf7-44c7-8cd2-331307b6680e",
    userId: "8dbf81a4-8519-467e-9ba8-03eff9e7adc5",
    title: "An Evening with Robin Williams",
    content:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
  },
  {
    id: "dbe94a73-9acc-4417-acb0-1f98dc7ac75b",
    userId: "2a92cb0d-0292-4cac-a3d3-fee8048223b6",
    title: "Ecstasy (Éxtasis)",
    content:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
  },
  {
    id: "a1bfae3e-d8b6-452b-ab7c-6169d0b2ab8a",
    userId: "2a92cb0d-0292-4cac-a3d3-fee8048223b6",
    title: "3rd Voice, The",
    content:
      "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  },
  {
    id: "9e3a63be-c5e6-41aa-8f90-1fe87b7afe33",
    userId: "135710e0-b497-420f-b897-ff4881cb0543",
    title: "The Magic Box",
    content:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    id: "9ec044b5-9209-43ee-a509-8aee25d5c689",
    userId: "135710e0-b497-420f-b897-ff4881cb0543",
    title: "Good News",
    content:
      "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
  },
];
const comments = [
  {
    id: "a5e4c4a2-12b3-4567-89cd-e1f2a3b4c5d6",
    content: "This is a comment on post 1 by user 1.",
    postId: "90641299-fc95-4862-a4fd-46213535a776",
    userId: "9b12d8e1-75b4-44e9-939f-e35807a27d35",
  },
  {
    id: "b6d5e4c3-23a4-5678-9cde-f1a2b3c4d5e6",
    content: "This is a comment on post 2 by user 2.",
    postId: "fc00e809-794f-49aa-bcb3-856e0307e09b",
    userId: "01579c39-b336-492e-ad82-34d81debff9d",
  },
  {
    id: "c7e6d5b4-34c5-6789-0def-12ab34cd56ef",
    content: "This is a comment on post 3 by user 3.",
    postId: "203d4058-f2f1-4a09-9eb2-14832d3953fc",
    userId: "de5b5a7f-d145-45a3-b0a1-ae2b5bb330fc",
  },
  {
    id: "d8f7e6c5-45d6-7890-1ef2-23ab45de67f8",
    content: "This is a comment on post 4 by user 4.",
    postId: "9a39a850-103d-41b1-9daa-019dc3df436e",
    userId: "135710e0-b497-420f-b897-ff4881cb0543",
  },
  {
    id: "e9f8d7b6-56e7-8901-2def-34ab56ef78d9",
    content: "This is a comment on post 5 by user 5.",
    postId: "c3696ecd-20cb-4839-8b1b-e3454d2da9d0",
    userId: "06b9add3-4711-4778-a7c4-89e481171cf4",
  },
  {
    id: "f0e9d8c7-67f8-9012-3def-45ab67f890e1",
    content: "This is a comment on post 6 by user 6.",
    postId: "3eff1d99-6bf7-44c7-8cd2-331307b6680e",
    userId: "dba4ab07-b011-4918-9482-b4e17a957cac",
  },
  {
    id: "g1f0e9d8-78g9-0123-4def-56ab78g9012d",
    content: "This is a comment on post 7 by user 7.",
    postId: "dbe94a73-9acc-4417-acb0-1f98dc7ac75b",
    userId: "839bfe17-a585-42b6-bf41-8bb646ea7192",
  },
  {
    id: "h2g1f0e9-89h0-1234-5def-67gh89i0123e",
    content: "This is a comment on post 8 by user 8.",
    postId: "a1bfae3e-d8b6-452b-ab7c-6169d0b2ab8a",
    userId: "2a92cb0d-0292-4cac-a3d3-fee8048223b6",
  },
  {
    id: "i3h2g1f0-90i1-2345-6def-78ij90k1234f",
    content: "This is a comment on post 9 by user 9.",
    postId: "9e3a63be-c5e6-41aa-8f90-1fe87b7afe33",
    userId: "9b5395e2-6ff9-4ae8-83f4-c3529c249710",
  },
  {
    id: "j4i3h2g1-01j2-3456-7def-89jk01l2345g",
    content: "This is a comment on post 10 by user 10.",
    postId: "9ec044b5-9209-43ee-a509-8aee25d5c689",
    userId: "8dbf81a4-8519-467e-9ba8-03eff9e7adc5",
  },
];

const reactions = [
  {
    type: ReactionType.LIKE,
    postId: "90641299-fc95-4862-a4fd-46213535a776",
    userId: "9b12d8e1-75b4-44e9-939f-e35807a27d35",
  },
  {
    type: ReactionType.LIKE,
    postId: "fc00e809-794f-49aa-bcb3-856e0307e09b",
    userId: "01579c39-b336-492e-ad82-34d81debff9d",
  },
  {
    type: ReactionType.DISLIKE,
    postId: "203d4058-f2f1-4a09-9eb2-14832d3953fc",
    userId: "de5b5a7f-d145-45a3-b0a1-ae2b5bb330fc",
  },
  {
    type: ReactionType.DISLIKE,
    postId: "9a39a850-103d-41b1-9daa-019dc3df436e",
    userId: "135710e0-b497-420f-b897-ff4881cb0543",
  },
  {
    type: ReactionType.LIKE,
    postId: "c3696ecd-20cb-4839-8b1b-e3454d2da9d0",
    userId: "06b9add3-4711-4778-a7c4-89e481171cf4",
  },
  {
    type: ReactionType.DISLIKE,
    postId: "3eff1d99-6bf7-44c7-8cd2-331307b6680e",
    userId: "dba4ab07-b011-4918-9482-b4e17a957cac",
  },
  {
    type: ReactionType.LIKE,
    postId: "dbe94a73-9acc-4417-acb0-1f98dc7ac75b",
    userId: "839bfe17-a585-42b6-bf41-8bb646ea7192",
  },
  {
    type: ReactionType.DISLIKE,
    postId: "a1bfae3e-d8b6-452b-ab7c-6169d0b2ab8a",
    userId: "2a92cb0d-0292-4cac-a3d3-fee8048223b6",
  },
  {
    type: ReactionType.LIKE,
    postId: "9e3a63be-c5e6-41aa-8f90-1fe87b7afe33",
    userId: "9b5395e2-6ff9-4ae8-83f4-c3529c249710",
  },
  {
    type: ReactionType.DISLIKE,
    postId: "9ec044b5-9209-43ee-a509-8aee25d5c689",
    userId: "8dbf81a4-8519-467e-9ba8-03eff9e7adc5",
  },
];

(async function () {
  const prisma = new PrismaClient();

  const addUsers = await prisma.user.createMany({
    data: users,
  });

  const addPosts = await prisma.post.createMany({
    data: posts,
  });

  const addComments = await prisma.comment.createMany({
    data: comments,
  });

  const addReactions = await prisma.reaction.createMany({
    data: reactions,
  });

  try {
    console.log("created users", addUsers.count);
    console.log("created posts", addPosts.count);
    console.log("created comments", addComments.count);
    console.log("created reactions", addReactions.count);
  } catch (e) {
    console.log(e);
  }
})();
