import React from "react";
import "./badges.css";
import { CIcon } from "@coreui/icons-react";
import {
  CForm,
  CInput,
  CCard,
  CRow,
  CCol,
  CCardBody,
  CCardHeader,
  CDataTable,
  CBadge,
  CButton,
} from "@coreui/react";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
const Badges = () => {
  const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const badgeList = [
    {
      Number: "1245678",
      "Created Date": "21-01-2021",
      Scans: "12",
      "Global Scans": "19",
    },
  ];

  return (
    <>
      <CRow>
        <CCol md="12">
          <CCard>
            <CCardHeader>
              <h4 className="table-header">Badges</h4>
            </CCardHeader>
            <CCardBody>
              <div class="custom-header">
                <CForm className="d-flex custom-form mt-2 mb-2">
                  <CInput type="search" className="me-2" placeholder="Search" />
                  <CButton type="submit" color="primary" variant="outline">
                    Search
                  </CButton>
                </CForm>
                <CButton type="button" className="button-primary-small">
                  Export
                </CButton>
              </div>

              <CDataTable
                items={badgeList}
                fields={[
                  {
                    key: "#",
                    _style: { width: "5%" },
                    _classes: "font-weight-bold",
                  },
                  "Badge Number",
                  "Created Date",
                  "Assigned To",
                  "Scans",
                  "Global Scans",
                  {
                    key: "Action",
                    label: "",
                    _style: { width: "12%" },
                    sorter: true,
                    filter: false,
                  },
                ]}
                primary
                hover
                striped
                bordered
                sorter
                columnFilter
                // onRowClick={(row)=>{
                //     history.push({
                //         pathname: '/dashboard/employees/details',
                //         state: { employee: row }
                //     })
                // }}
                size="sm"
                itemsPerPage={10}
                pagination
                scopedSlots={{
                  Action: (item) => (
                    <td>
                      <CButton
                        onClick={() => {}}
                        type="button"
                        size="sm"
                        color="danger"
                      >
                        Delete
                      </CButton>{" "}
                      <CButton
                        size="sm"
                        type="button"
                        color="primary"
                        id="dropdownMenu"
                        data-toggle="dropdown"
                        aria-expanded="false"
                        className="dropdown-toggle"
                      >
                        View
                      </CButton>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol md="12" class="button-holder">
          <CButton className="button-primary assign-align" type="button">
            Assign all unassigned
          </CButton>
          <CButton
            type="button"
            className="button-primary add-align"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Add New <CIcon name="cil-plus" size="xl"></CIcon>
          </CButton>
          <div class="dropdown">
            <div class="dropdown-menu mt-2" aria-labelledby="dropdownMenu2">
              <button class="dropdown-item" type="button">
                Buy New
              </button>
              <div class="dropdown-divider"></div>
              <button
                type="button"
                class="dropdown-item"
                onClick={handleClickOpen}
              >
                Use Existing
              </button>
            </div>
            {/* modal for form input */}
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="form-dialog-title"
              className="d-block"
            >
              <div className="modal-comp">
                <DialogTitle id="form-dialog-title">
                  Use Existing Badge
                </DialogTitle>
                <DialogContent>
                  <form>
                    <TextField
                      required
                      id="standard-required"
                      label="Card ID"
                      defaultValue="Hello World"
                      className="d-block"
                    />
                    <FormControl className="w-100 mt-2">
                      <InputLabel id="demo-simple-select-label">
                        Product Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={age}
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Product1</MenuItem>
                        <MenuItem value={20}>Product2</MenuItem>
                        <MenuItem value={30}>Product3</MenuItem>
                      </Select>
                    </FormControl>
                  </form>
                </DialogContent>
                <DialogActions className="justify-content-center">
                  <CButton
                    onClick={handleClose}
                    color="primary"
                    className="button-primary px-4 mt-2"
                  >
                    Submit
                  </CButton>
                </DialogActions>
              </div>
            </Dialog>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Badges;
