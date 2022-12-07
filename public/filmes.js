const client = axios.create({
  baseURL: "https://swapi.py4e.com/api/films/1/" 
});



const App = () => {
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
       client.get('?_limit=10').then((response) => {
          setPosts(response.data);
          console.log(data);
       });
    }, []);
 
    return (
       console.error(error)
    );
 };
 
 export default App;