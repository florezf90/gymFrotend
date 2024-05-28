import moriremos from '../../public/moriremos.webp';
import gym from '../../public/transparentSec.webp';

export default function benefitsInfo () {
    const benefitscards = [
      {
        Btitle: "Benefits",
        Bdescription: "Join us and transform your life",
        Bimg: moriremos,
      },
      {
        Btitle: "Benefits2",
        Bdescription: "Join us and transform your life once again",
        Bimg: gym,
      },
      {
        Btitle: "Benefits3",
        Bdescription: "Join us and transform your life once again",
        Bimg: gym,
      },
    ];
    return { benefitscards };
    
}