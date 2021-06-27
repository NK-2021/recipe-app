import {useState, useEffect} from 'react';
import { CssBaseline, Typography, Grid, Container, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { APP_ID, APP_API_KEY } from './config';
import RecipeCard from './components/RecipeCard';
import PrimarySearchAppBar from './components/SearchBar';
import Footer from './components/Footer';

const useStyles = makeStyles((theme)=>({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  icon:{
    marginRight: '20px'
  },
  button:{
    marginTop: '40px'
  },
  cardGrid:{
      padding: '20px 0'
  },
  card:{
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
  },
  cardMedia:{
    paddingTop: '56.25%'
  },
  cardContent:{
    flexGrow: 1,
  }

}));

const App = () => {
  const classes = useStyles();
  const[recipes, setRecipes] = useState([]);
  const[query, setQuery] = useState('chicken');

  const getRecipe = async (query) =>{
    try{
      const response = await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_API_KEY}&diet=balanced`);
      //console.log(response.data.hits);
      setRecipes(response.data.hits);
    }
    catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getRecipe(query);
    /* eslint-disable react-hooks/exhaustive-deps */
  }, [query])

  return (
    <>
    <CssBaseline/>
    <PrimarySearchAppBar setQuery={setQuery}/>
    <main>
      <div>
        <Container maxWidth="sm">
          <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
            Recipe List
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </Typography>
        </Container>
        <div className="classes.button">
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Divider/>
            </Grid>
            {/* <Grid item>
              <Button variant="contained" color="primary">
                See my Photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary">
                See my Photos
              </Button>
            </Grid> */}
          </Grid>
        </div>
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
        {recipes.map((recipe)=>{
              const {recipe:{label, image, cuisineType, dishType, calories}}= recipe;
              const props = {
                key: label,
                name: label,
                image,
                cuisineType,
                dishType,
                calories
              }
              return(
                <Grid item key={label} xs={12} sm={6} md={4}>
                  <RecipeCard {...props}/>
                </Grid>
              )
        })}
          
        </Grid>

      </Container>
    </main>
    <Footer/>
    </>
  );
}

export default App;