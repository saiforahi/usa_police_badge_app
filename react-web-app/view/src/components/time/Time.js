import React from "react";
import {
  CCard,
  CCardTitle,
  CCardBody,
  CCardText,
  CCardHeader,
  CButton,
  CDataTable,CBadge
} from "@coreui/react";
import "./Time.css";
import swal from "sweetalert";
import { useHistory } from "react-router";
const Time = () => {
  let history=useHistory()
  return (
    <>
      <CCard className="card-style">
        <CCardHeader><CCardTitle>Time Entries</CCardTitle></CCardHeader>
        <CCardBody>
          <CDataTable
            items={[]}
            fields={[
              { key: '#', _style: { width: '5%' }, _classes: 'font-weight-bold' },
              'Officer', 'Badge', { key: 'Clock In', label: 'Clock In', _style: { width: '12%' }, sorter: false, filter: false },{ key: 'Clock Out', label: 'Clock Out', _style: { width: '12%' }, sorter: false, filter: false },'Date', { key: 'Action', label: '', _style: { width: '12%' }, sorter: false, filter: false }
            ]}
            light
            hover
            striped
            bordered
            sorter
            columnFilter
            // clickableRows
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
              'Action':
                (item) => (
                  <td>
                    <CBadge>
                      <CButton onClick={() => { swal('Warning', 'This service is not available right now', 'warning') }} type="button" size="sm" color="danger">Delete</CButton> <CButton onClick={() => { history.push({ pathname: '/dashboard/employees/details', state: { employee: item } }) }} size="sm" type="button" color="primary">Edit</CButton>
                    </CBadge>
                  </td>
                )
            }}
          />
        </CCardBody>
      </CCard>
    </>
  );
};

export default Time;
