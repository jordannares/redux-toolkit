import { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './redux/slices/counterSlices';


function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPost());
  },[]);

  const post = useSelector(state => state.post);

  const { postsList, loading } = post;
  console.log({ postsList,loading });

  return (
    <div className="App">

      <h1>Post Lists</h1>

      {loading ? <h2>Loading...</h2> : postsList?.map( post => (
        <>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <hr/>
        </>
      ))}
    </div>
  );
}

export default App;
