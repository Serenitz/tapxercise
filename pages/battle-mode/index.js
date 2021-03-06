import Image from "next/image";
import Link from "next/link";
import Background from "../../components/ui/background";
import Center from "../../components/ui/center";
import Form from "../../components/ui/form";

import styles from "../../styles/battlemode.module.css";

export default function BattleModePage() {
  return (
    <div>
      <center>
        <Link href="/">
          <a>
            <Image
              src="/tapxercise.png"
              alt="tapxercise"
              width={477.5}
              height={50}
            />
          </a>
        </Link>

        <Background>
          <Image
            src="/bg-image.png"
            alt="background"
            width={1920}
            height={1920}
          />
        </Background>
      </center>

      <div
        className={`${styles["divider"]} d-flex justify-content-center`}
      ></div>

      <Center>
        <Form gameType="2"></Form>
        {/* <Container>
          <Row>
            <Col lg={6} className={styles.bottom}>
              <center>
                <Form gameType="2" player="one">
                  <Image
                    src="/player-one.png"
                    alt="Player One Name"
                    width={611}
                    height={64}
                  />
                </Form>
              </center>
            </Col>
            <Col>
              <center>
                <Form gameType="2" player="two">
                  <Image
                    src="/player-two.png"
                    alt="Player Two Name"
                    width={611}
                    height={64}
                  />
                </Form>
              </center>
            </Col>
          </Row>
        </Container> */}
      </Center>
    </div>
  );
}
