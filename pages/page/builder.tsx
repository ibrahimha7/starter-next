import { Paper, Grid, Typography, TextField } from "@material-ui/core";
import React, { useState } from "react";

export default function Builder() {
  const [title, setTitle] = useState("");
  const [html, setHtml] = useState("");
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };
  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
    </div>

    // <div>
    //   <form onSubmit={handleSubmit} color="primary">
    //     <Paper
    //       sx={{
    //         p: 2,
    //         margin: "auto",
    //         marginTop: 10,
    //         maxWidth: 500,
    //         flexGrow: 1,
    //       }}
    //     >
    //       <form onSubmit={handleSubmit} color="primary">
    //         <Grid container spacing={2}>
    //           <Grid item xs={12}>
    //             <Typography style={{ fontSize: "1.6rem" }}>
    //               {" "}
    //               Builder{" "}
    //             </Typography>
    //           </Grid>
    //           <Grid item xs={12}>
    //             <TextField
    //               fullWidth
    //               type="title"
    //               id="title"
    //               value={title}
    //               onChange={(e: any) => setTitle(e.target.value)}
    //             />
    //           </Grid>

    //           <Grid item xs={12}>
    //             <TextField
    //               fullWidth
    //               type="html"
    //               id="html"
    //               value={html}
    //               onChange={(e: any) => setHtml(e.target.value)}
    //             />
    //           </Grid>

    //           <Grid item xs={12}>
    //             <Button type="submit" value="Login" variant="contained">
    //               Save
    //             </Button>
    //           </Grid>
    //         </Grid>
    //       </form>
    //     </Paper>
    //   </form>
    // </div>
  );
}
