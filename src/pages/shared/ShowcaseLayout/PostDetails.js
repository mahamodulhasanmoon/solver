import React from "react";

const PostDetails = () => {
  return (
    <div className="px-3 pt-3 py-0">
      <div className="postContent">
        <p className="text-justify text-[15px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam rerum
          perspiciatis, nesciunt dignissimos vitae doloremque possimus, ad
          asperiores, minima illum corporis dolor minus aliquam consectetur quo.
          Cupiditate autem ratione delectus eius culpa. Doloribus natus magnam
          quidem similique adipisci dolorem. Reiciendis, sit non! Voluptatum
          explicabo distinctio est laboriosam necessitatibus? Non ullam, rerum
          delectus quam facere, vitae rem molestiae minus, incidunt sit ratione.
          Magnam distinctio tempore, corporis error et quo rem totam provident,
          maiores est commodi dolorem maxime id illum quas porro dolore numquam
          laborum corrupti! Autem nesciunt eaque officiis ad odio dolorem
          voluptates sit doloribus ducimus eum, corporis commodi illo
          recusandae.
        </p>
      </div>
      <div className="footer flex justify-around items-center mt-1 userNav border-y-darkShade p-2 ">
        <span className="text-lg">Asker</span>
        <span className="text-lg">Time</span>
        <span className="text-lg">Solver</span>
      </div>
    </div>
  );
};

export default PostDetails;
