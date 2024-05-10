 import bicepcurl from "../../public/saes.webp";
 import moriremos from "../../public/moriremos.webp";
 import cardiogril from "../../public/gymgirl.webp";
 
 export default function CarouselInfo() {

        const carouselInfo = [
            {
                photo: bicepcurl,
                title: 'Slide 1',
                description: 'This is the first slide',
            },
            {
                photo: moriremos,
                title: 'Slide 2',
                description: 'This is the second slide',
            },
            {
                photo: cardiogril,
                title: 'Slide 3',
                description: 'This is the third slide',
            },
        ];

        return carouselInfo;
}