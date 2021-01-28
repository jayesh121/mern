import React from 'react';
import Layout from "../../components/Layout";
import Jumbotron from 'react-bootstrap/Jumbotron'

function Home(props) {
    return (
        <div>
            <Layout sidebar>

                <Jumbotron style={{ margin: '5rem', background: 'white' }} className="text-center">
                    <h1>Hello, world!</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
  extra attention to featured content or information.
</p>

                </Jumbotron>
            </Layout>
        </div>
    )
}

export default Home