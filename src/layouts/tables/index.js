// @mui material components
import Card from "@mui/material/Card";

import brainImage from '/home/ayush.mallick@apmosys.mahape/Music/vision-ui-dashboard-react-main/src/assets/images/brain.jpg';

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Table from "examples/Tables/Table";

function Tables() {
 return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            {/* Use a div with a background image */}
            <div
              style={{
                backgroundImage: `url(${brainImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '500px', // Increased height to 400px
                width: '100%', // Adjust the width as needed
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '20px', // Add some padding for content
              }}
            >
              <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
 <VuiTypography variant="lg" color="white" sx={{ fontSize: '2rem' }}>
    Brain Cancer Detection
 </VuiTypography>
</VuiBox>
              <VuiBox>
                <Table />
              </VuiBox>
            </div>
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
 );
}

export default Tables;
