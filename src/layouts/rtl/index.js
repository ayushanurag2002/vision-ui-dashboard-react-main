
import colors from "assets/theme/base/colors";
import Card from "@mui/material/Card";


// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import lungImage from '/home/ayush.mallick@apmosys.mahape/Music/vision-ui-dashboard-react-main/src/assets/images/lung.jpg';

// Dashboard layout components
import { useVisionUIController, setLayout } from "context";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

function RTL() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [, dispatch] = useVisionUIController();

 

  return (
    <DashboardLayout>
      <DashboardNavbar />   
      
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            {/* Use a div with a background image */}
            <div
              style={{
                backgroundImage: `url(${lungImage})`,
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
 <VuiTypography variant="lg" color="Red" sx={{ fontSize: '2rem' }}>
    Lung Cancer Detection
 </VuiTypography>
</VuiBox>
              <VuiBox>
                
              </VuiBox>
            </div>
          </Card>
        </VuiBox>
      </VuiBox>
    </DashboardLayout>
  );
}

export default RTL;
