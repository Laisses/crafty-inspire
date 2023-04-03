import { NavbarHome } from "../components/NavbarHome";
import styled from "styled-components";
import { COLORS, device } from "../constants";
import bannerWider from "../assets/bannerWider.png"
import banner from "../assets/banner.png";
import wood from "../assets/wood.jpg";
import { MainButton } from "../components/MainButton";

export const WhyUs = () => {
    return (
        <>
            <NavbarHome whyUs="true" />
            <Container>
                <Banner></Banner>
                <TextContainer>
                    <Header>
                        <Text>
                            Do you often come across interesting projects but forget about them because you didn't save them properly? Well, us too! So we designed a tool for keeping track of all your favorite DIY projects.
                        </Text>
                    </Header>
                    <Text>
                        How it works
                    </Text>
                    <Text>
                        <ConstrastWord>Create an account: </ConstrastWord>
                        The first step is to create an account on Crafty Inspire. This will allow you to save and organize all of your project ideas in one place.
                    </Text>
                    <Text>
                        <ConstrastWord>Save your ideas: </ConstrastWord>
                        Once you're logged in, you can start saving your project ideas. You can save your own original ideas or use our data scraper to gather information from youtube videos or blog posts, such as title, description and author, to help you remember your inspirations.
                    </Text>
                    <Text>
                        <ConstrastWord>Organize your ideas: </ConstrastWord>
                        You can organize your project ideas by creating categories and tags. This will help you quickly find the project you're looking for when you're ready to start crafting.
                    </Text>
                    <Text>
                        <ConstrastWord>Get inspired: </ConstrastWord>
                        Finally, Crafty is a great place to get inspired! You can browse other users' project ideas and discover new techniques and materials to try in your own crafting.
                    </Text>
                </TextContainer>
                <BottomContainer>
                    <Image
                        src={wood}
                        alt="Image of a man wood turning"
                    />
                    <BottomDiv>
                        <LightText>
                        We hope you enjoy using Crafty to organize your project ideas. Happy crafting!
                        </LightText>
                        <MainButton text="get started" />
                    </BottomDiv>
                </BottomContainer>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;

    @media ${device.mobileL} {
        margin-bottom: 0;
    }
`;

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${bannerWider});
    background-repeat: no-repeat;
    background-size: 100% 200px;

    @media ${device.tablet} {
        background-image: url(${banner});
    }

    @media ${device.mobileL} {
        height: 120px;
        background-size: 100% 120px;
    }
`;

const TextContainer = styled.div`
    max-width: 800px;

    @media ${device.tablet} {
        padding: 30px;
    }
`;

const Header = styled.div`
    margin-bottom: 40px;
`;

const Text = styled.div`
    font-size: 18px;
    font-weight: 400;
    color: ${COLORS.TEXT.DARK_GREEN};
    margin-top: 20px;
`;

const ConstrastWord = styled.span`
    color: ${COLORS.TEXT.ACCENT_GREEN};
    font-weight: 700;
`;

const BottomContainer = styled.div`
    margin-top: 60px;
    max-width: 800px;
    display: flex;

    @media ${device.tablet} {
        padding: 30px;
        margin-top: 20px;
    }

    @media ${device.mobileL} {
        flex-direction: column;
        margin-top: 0;
    }
`;

const Image = styled.img`
    width: 400px;
    border-radius: 6px;

    @media ${device.tablet} {
        width: 330px;
    }
`;

const BottomDiv = styled.div`
    margin-left: 80px;

    @media ${device.tablet} {
        margin-left: 30px;
    }

    @media ${device.mobileL} {
        margin-left: 0;
    }
`;

const LightText = styled.p`
    font-size: 20px;
    font-weight: 300;
    color: ${COLORS.TEXT.DARK_GREEN};
    margin-bottom: 50px;

    @media ${device.mobileL} {
        margin-bottom: 30px;
    }
`;
