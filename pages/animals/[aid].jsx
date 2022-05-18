import { useRouter } from "next/router";
import WithBoth from "../../components/layout/with/WithBoth";
import styles from "../../styles/pages/animals/[aid].module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import gentleman from "../../assets/images/gentleman.png";
import hotdog from "../../assets/images/hotdog.jpg";
import Left from "../../assets/svgs/left.svg";
import Right from "../../assets/svgs/right.svg";
import Link from "next/link";
import axios from "axios";

const IndividualAnimal = () => {
  const [image, setImage] = useState(0);
  const router = useRouter();
  const { aid } = router.query;
  const [animal, setAnimal] = useState([]);
  const [success, setSuccess] = useState(false);

  const getInfo = async () => {
    try {
      const data  = await axios.get(
        `/api/v1/animals/admin/${router.query._id}`
      );
      setAnimal(data.data.animal);
      console.log(animal);
    } catch (err) {
      console.log("ERROR ERROR");
      console.log(err);
    }
  };

  useEffect(() => {
    getInfo();
    setSuccess(true);
  }, []);

  return success ? (
    (console.log(animal),
    (
      <WithBoth className={styles.indivAnimal}>
        <div className={styles.side}>
          <div className={styles.important}>
            <div className={styles.main}>
              <div className={styles.slider}>
                {animal.pictures ? (
                  <div
                    className={styles.left}
                    onClick={() =>
                      setImage((i) =>
                        i - 1 < 0 ? animal.images.length - 1 : i - 1
                      )
                    }
                  >
                    <Left className={styles.icon} />
                  </div>
                ) : null}
                <div className={styles.image}>
                  {animal.pictures ? (
                    <Image
                      src={animal.pictures[0]}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className={styles.elem}
                    />
                  ) : (
                    <Image
                      src="/logo.png"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      className={styles.elem}
                    />
                  )}
                </div>
                {animal.pictures ? (
                  <div
                    className={styles.right}
                    onClick={() =>
                      setImage((i) =>
                        i + 1 > animal.images.length - 1 ? 0 : i + 1
                      )
                    }
                  >
                    <Right className={styles.icon} />
                  </div>
                ) : null}
              </div>
              <h2 className={styles.name}>{animal.name}</h2>
            </div>
            {/* {animal.video ? <div className={styles.video}>
                        <iframe
                            width="100%"
                            height="100%"
                            className={styles.iframe}
                            src={animal.video.replace("watch?v=", "embed/") + "?rel=0&showinfo=0&autohide=1&wmode=transparent"}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            wmode="transparent"
                        ></iframe>
                    </div> : null} */}
          </div>
          <div className={styles.info}>
            <h2 className={styles.name}>{animal.name}</h2>
            <div className={styles.common}>
              <h4 className={styles.commonInfo}>Common Information</h4>
              <ul className={styles.info}>
                <li className={styles.item + " " + styles.noFlex}>
                  <p className={styles.title}>Description:</p>
                  <p className={styles.details}>{animal.description}</p>
                </li>
                <li className={styles.item}>
                  <p className={styles.title}>Breed:</p>
                  <p className={styles.details}>{animal.breed}</p>
                </li>
                <li className={styles.item}>
                  <p className={styles.title}>Sex:</p>
                  <p className={styles.details}>{animal.gender}</p>
                </li>
                <li className={styles.item}>
                  <p className={styles.title}>Neutered:</p>
                  <p className={styles.details}>
                    {animal.neutered ? "Yes" : "No"}
                  </p>
                </li>
                <li className={styles.item}>
                  <p className={styles.title}>Vaccinated:</p>
                  <p className={styles.details}>
                    {animal.vaccinated ? "Yes" : "No"}
                  </p>
                </li>
              </ul>
            </div>
            {animal.needs ? (
              <div className={styles.specs}>
                <h4 className={styles.specInfo}>Specifications</h4>
                {/* <div className={styles.info}>
                            {animal.specs.needs.length ? <div className={styles.cata}>
                                <h4 className={styles.title}>Needs:</h4>
                                <ul className={styles.list}>
                                    {animal.specs.needs.map((need, index) => <li key={index}>{need}</li>)}
                                </ul>
                            </div> : null}
                            {animal.specs.cautions.length ? <div className={styles.cata}>
                                <h4 className={styles.title}>Cautions:</h4>
                                <ul className={styles.list}>
                                    {animal.specs.cautions.map((cauc, index) => <li key={index}>{cauc}</li>)}
                                </ul>
                            </div> : null}
                </div>*/}
              </div>
            ) : null}
            <div className={styles.contact}>
              <Link href={`/animals/${aid}/contact`}>
                <button className={styles.button}>Contact a Teacher</button>
              </Link>
              <p>Make this animal a part of your family!</p>
            </div>
          </div>
        </div>
      </WithBoth>
    ))
  ) : (
    <div></div>
  );
};

export default IndividualAnimal;
