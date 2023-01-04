import Card from "../components/Card";
import usePost from "../hooks/use-post-hook";

function Homepage() {
  const { posts, images } = usePost();

  const renderedList = posts.map((post, index) => {
    return (
      <Card key={post.id}>
        <img src={images?.[index]?.img} alt="" className="w-48 " />
        {post.title}
        <button>click me</button>
      </Card>
    );
  });

  return (
    <div className="grid grid-cols-3 gap-10 p-20 max-lg:grid-cols-2 max-sm:grid-cols-1">
      {renderedList}
    </div>
  );
}

export default Homepage;
