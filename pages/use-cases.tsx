import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/UseCases.module.css";
import EntryPageHeader from "../components/EntryPageHeader";
import EntryPageFooter from "@/components/EntryPageFooter";
import EntryPageCenterBar from "@/components/EntryPageCenterBar";
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const inter = Inter({ subsets: ["latin"] });

const cardData = [
  {
    img: "https://assets.skool.com/skool/261fd46f69e6426aa595e243f823591f.png",
    title: "Online courses",
    content: "Put your courses in the same place as your community. Let your students interact and collaborate in one place."
  },
  {
    img: "https://assets.skool.com/skool/ee8af466750b46d2b7e72b131ee925ab.png",
    title: "Subscription memberships",
    content: "Build a community and monetize by charging a monthly/annual subscription. Like a country club!"
  },
  {
    img: "https://assets.skool.com/skool/890f1c1ae5ce42acaf2abea87154b563.png",
    title: "Group funnels",
    content: "Convert your audience to community to customers. Build interactive funnels that engage and convert."
  },
  {
    img: "https://assets.skool.com/skool/00e5ffa1f8dc48d288b91c498ca93bcb.png",
    title: "Coaching programs",
    content: "Give your clients a home and improve their experience. Put all resources in 1-place, centralize communication."
  },
  {
    img: "https://assets.skool.com/skool/c7000b95c7fa45c49f7136562ec47c8d.png",
    title: "Masterminds",
    content: "Get your group in sync by putting everything in 1-place. Community, calls, events, recordings, DM's, broadcasts."
  },
  {
    img: "https://assets.skool.com/skool/280f223b09b24ad5b210f86cf7a37032.png",
    title: "Support forums",
    content: "Get your customers to support each other and build searchable help documentation organically over time."
  },
  {
    img: "https://assets.skool.com/skool/e665efd7aee849588f848c660b67191f.png",
    title: "SaaS / product development",
    content: "Get feedback from your users to know what to build. Announce new features and get feedback immediately."
  },
  {
    img: "https://assets.skool.com/skool/e1105832ab1d4aee8c30c5e844066715.png",
    title: "Influencer / fan communities",
    content: "Give your audience a place to hangout and connect. Deepen your relationship and get ideas from them."
  },
];

const theme = createTheme({
  typography: {
    h5: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "bold",
      fontStyle: "normal",
      fontSize: 20,
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: "Roboto, Helvetica, Arial, sans-serif",
      fontWeight: "normal",
      fontStyle: "normal",
      fontSize: 16,
      lineHeight: 1.5,
    },
  },
});


export default function UseCases() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <EntryPageHeader />
        <div className={styles.content} data-testid="content">
          <div className={styles.title}>How people use Skool</div>
          <EntryPageCenterBar />
          <ThemeProvider theme={theme}>
            <Box sx={{ width: '100%' }}>
              <Grid container rowSpacing={1} columnSpacing={2}>
                {cardData.map(item => {
                  return (
                    <Grid key={item.title} xs={6}>
                      <Card sx={{ display: 'flex', alignItems: 'center', boxShadow: 'none' }}>
                        <CardMedia
                          component="img"
                          sx={{ width: "86px", height: "86px" }}
                          image={item.img}
                          alt={item.title}
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                              {item.title}
                            </Typography>
                            <Typography variant="body1" component="div">
                              {item.content}
                            </Typography>
                          </CardContent>
                        </Box>
                      </Card>
                    </Grid>
                  )
                })}
              </Grid>
            </Box>
          </ThemeProvider>
        </div>
        <EntryPageFooter />
      </main>
    </>
  );
}
