import Head from "next/head";
import Meta from "@hackclub/meta";
import { Spacer, Text, Grid, Card, Page } from "@geist-ui/react";
import projects from "../sites.json";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Meta
        as={Head}
        title="Hack Club Design Awards"
        description="awef!"
        image="https://github.com/hackclub.png"
        color="#e5e5e5"
      />
      <main>
        <Page>
          <Page.Header>
            <Text h1>Hack Club Design Awards</Text>
            <Text p>A 2021 Hack Club summer online web design contest.</Text>
          </Page.Header>
          <Page.Content>
            <Grid.Container gap={2} justify="center" height="100px">
              <Grid xs={6}>
                {projects.map((p) => (
                  <>
                    <Card key={p.id} />
                    <Text p>{p.github}</Text>
                  </>
                ))}
              </Grid>
            </Grid.Container>
          </Page.Content>
          <Page.Footer>
            <Footer />
          </Page.Footer>
        </Page>
      </main>
    </div>
  );
}
