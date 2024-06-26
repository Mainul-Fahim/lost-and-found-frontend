import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import facebookIcon from "@/assets/landing_page/facebook.png";
import instagramIcon from "@/assets/landing_page/instagram.png";
import twitterIcon from "@/assets/landing_page/twitter.png";
import linkedIcon from "@/assets/landing_page/linkedin.png";
const Footer = () => {
    return (
        <Box bgcolor="rgb(17, 26, 34)" py={5}>
            <Container>
                <Stack direction="row" gap={4} justifyContent="center">
                    <Typography color="#fff" component={Link} href="/consultation">
                        Lost Items
                    </Typography>
                    <Typography color="#fff">Found Items</Typography>
                    <Typography color="#fff">Claim Items</Typography>
                    <Typography color="#fff">Report Items</Typography>
                    <Typography color="#fff">Banned Items</Typography>
                </Stack>

                <Stack direction="row" gap={2} justifyContent="center" py={3}>
                    <Image src={facebookIcon} width={30} height={30} alt="facebook" />
                    <Image src={instagramIcon} width={30} height={30} alt="facebook" />
                    <Image src={twitterIcon} width={30} height={30} alt="facebook" />
                    <Image src={linkedIcon} width={30} height={30} alt="facebook" />
                </Stack>
                <div className="border-b-[1px] border-dashed"></div>
                <Stack
                    direction="row"
                    gap={2}
                    justifyContent="space-between"
                    alignItems="center"
                    py={3}
                >
                    <Typography component="p" color="white">
                        &copy;2024 Lost and Found. All Rights Reserved.
                    </Typography>
                    <Typography
                        variant="h4"
                        component={Link}
                        href="/"
                        fontWeight={600}
                        color="white"
                    >

                        Lost and Found
                    </Typography>
                    <Typography component="p" color="white">
                        Privacy Policy! Terms & Conditions
                    </Typography>
                </Stack>
            </Container>
        </Box>
    );
};

export default Footer;