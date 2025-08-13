import React from "react";
import { Button, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid size= {{xs:12, sm:6, md:3}}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>

          <div>
            <Button color="inherit" size="medium">
              About
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Blog
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              press
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Jobs
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Partners
            </Button>
          </div>
        </Grid>

        <Grid size= {{xs:12, sm:6, md:3}}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>

          <div>
            <Button color="inherit" size="medium">
              Marketing
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Analytics
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Commerce
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Insights
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Supports
            </Button>
          </div>
        </Grid>

        <Grid size= {{xs:12, sm:6, md:3}}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>

          <div>
            <Button color="inherit" size="medium">
              Guides
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              API Status
            </Button>
          </div>
        </Grid>

        <Grid size= {{xs:12, sm:6, md:3}}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>

          <div>
            <Button color="inherit" size="medium">
              Claim
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Privacy
            </Button>
          </div>

          <div>
            <Button color="inherit" size="medium">
              Terms
            </Button>
          </div>
        </Grid>

        <Grid className='pt-20' size={12}>
            <Typography variant="body2" component="p" align="center">
                &copy; 2025 My Ecommerce. All rights reserved.
            </Typography> 

            <Typography variant="body2" component="p" align="center">
                Made with love by Mukesh.
            </Typography>

            <Typography variant="body2" component="p" align="center">
                Icons made by{' '}
                <Link href="https://www.freepik.com" color="inherit" underline="always">
                Freepik 
                </Link>{' '}
                from{' '}
                <Link href="https://www.flaticon.com" color="inherit" underline="always">www.flaticon.com
                </Link>

            </Typography>
        </Grid>

      </Grid>
    </div>
  );
};

export default Footer;
