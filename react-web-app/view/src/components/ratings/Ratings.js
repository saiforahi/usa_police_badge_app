import { CContainer } from '@coreui/react'
import React from 'react'
import {
    CRow,
    CCardBody,
    CCard,
    CDataTable,
} from "@coreui/react";
import { useSelector } from "react-redux";
const Ratings = () => {
    const ratingsTableData = useSelector(state => {
        let data = []
        state.ratings.data.forEach((rate, index) => {
          data.push({ '#': index + 1, 'Employee Name': rate.officer.first_name + ' ' + rate.officer.last_name, 'Badge Number': rate.officer.registration, 'Rating': Number(rate.star), 'Feedback': rate.comment, 'Date': new Date(rate.created_at).toLocaleDateString() + ' ' + new Date(rate.created_at).toLocaleTimeString() })
        })
        return data
    })
    return (
        <>
            <CRow>
                <CCard className="mt-2">
                    <CCardBody>
                        <CDataTable
                            items={ratingsTableData}
                            fields={[
                                {
                                    key: "#",
                                    _style: { width: "3%" },
                                    _classes: "font-weight-bold",
                                },
                                "Employee Name",
                                "Badge Number",
                                "Rating",
                                "Feedback",
                                "Date",
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
                        />
                    </CCardBody>
                </CCard>
            </CRow>
        </>
    )
}

export default Ratings