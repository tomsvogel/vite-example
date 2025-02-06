import { useParams } from "react-router";

const BlogDetail = () => {
  const {slug} = useParams();

  return (<>
  <h1>Blogdetail</h1>
  <div>{slug}</div>
  </>)
  ;
};

export default BlogDetail;
