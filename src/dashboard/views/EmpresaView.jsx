import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { Buttons } from "../components/Buttons";
import { VentasFirstContainer } from "../components/VentasFirstContainer";
import { VentasSecondContainer } from "../components/VentasSecondContainer";
import { VentasTableViewer } from "../components/VentasTableViewer";
import { EmpresaButtons } from "../helpers/buttonsData";

export const EmpresaView = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        width: "100%",
        height: {
          xs: "100%",
          sm: "100%",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          width: "100%",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
            },
            width: "100%",
            height: "100%",
          }}
        >
          <Grid
            item
            sx={{
              p: 0.5,
              width: "100%",
              height: "100px",
            }}
          ></Grid>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              width: "100%",
              height: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                p: 1,
              }}
            >
              <Grid
                item
                className="animated_container"
                sx={{
                  display: "flex",
                  width: "100%",
                  height: "30%",
                  borderRadius: "15px",
                }}
              >
                <Grid
                  item
                  className=""
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "15px",
                  }}
                ></Grid>
              </Grid>

              <Grid
                item
                className="container-custom animated_view_component-2"
                sx={{
                  width: "100%",
                  height: "70%",
                  borderRadius: "15px",
                  mt: 2,
                }}
              >
                {/* Ventas table viewer */}
                <VentasTableViewer />
              </Grid>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
