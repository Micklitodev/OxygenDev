import ProfileComponent from "@/components/dashboard/profile";

const Profile = () => {
  return (
    <>
      <ProfileComponent
        imageURL={"/favicon.ico"}
        name={"Mick Lito"}
        bio={`My name is Mick, and I'm a Enthusiastic FullStack Software Engineer based in Atlanta with a passion for crafting polished user interfaces and delivering exceptional user experiences. Highly skilled in building custom web applications using cutting-edge technologies like Next.js, Typescript, React, GraphQL, Node.js and MongoDB. Committed to open-source collaboration and driven by a continuous thirst for learning and growth in the dynamic and changing field of software development.`}
        email={"dev@testemail.com"}
        location={"40 Theator St, Sun City, AZ, 85351 "}
        phone={'4042223333'}
        billcycle={'7/20/24'}
      />
    </>
  );
};

export default Profile;
