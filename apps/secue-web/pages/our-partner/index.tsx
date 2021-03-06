import React from 'react';
import Image from 'next/image';
import styles from './our-partner.less';
import Layout from '../../components/layout';
import NavBar from '../../components/navbar';
// import '../public/styles/global.less';
export const Index = () => {
  const partnerImage = [
    {
      imagePath: '/images/partner/logo001.png',
    },
    {
      imagePath: '/images/partner/logo002.png',
    },
    {
      imagePath: '/images/partner/logo003.png',
    },
    {
      imagePath: '/images/partner/logo004.png',
    },
    {
      imagePath: '/images/partner/logo005.png',
    },
    {
      imagePath: '/images/partner/logo006.png',
    },
    {
      imagePath: '/images/partner/logo007.png',
    },
    {
      imagePath: '/images/partner/logo008.png',
    },
    {
      imagePath: '/images/partner/logo009.png',
    },
    {
      imagePath: '/images/partner/logo010.png',
    },
    {
      imagePath: '/images/partner/logo011.png',
    },
    {
      imagePath: '/images/partner/logo012.png',
    },
    {
      imagePath: '/images/partner/logo013.png',
    },
    {
      imagePath: '/images/partner/logo014.png',
    },
    {
      imagePath: '/images/partner/logo015.png',
    },
    {
      imagePath: '/images/partner/logo016.png',
    },
    {
      imagePath: '/images/partner/logo017.png',
    },
    {
      imagePath: '/images/partner/logo018.png',
    },
    {
      imagePath: '/images/partner/logo019.png',
    },
    {
      imagePath: '/images/partner/logo020.png',
    },
    {
      imagePath: '/images/partner/logo021.png',
    },
    {
      imagePath: '/images/partner/logo022.png',
    },
  ];

  return (
    <>
      <NavBar />
      <div className={styles.percentClass}>
        <div className={styles.MainContainer}>
          <Image
            className={styles.bannerImage}
            src="/images/soldier-army2.jpg"
            alt="secue-logo2"
            width={1920}
            height={1080}
          />
          <div className={styles.historyTextContainer}>
            <div className={styles.titleHistory}>Our Partner</div>
            <div className={styles.ImageContainer}>
              {partnerImage.map((data, index) => (
                <div key={index} className={styles.bannerImage}>
                  <Image
                    src={data.imagePath}
                    alt={'logo' + index}
                    width={160}
                    height={160}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Index;
