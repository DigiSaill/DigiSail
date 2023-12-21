import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CupSvg from "../SmallComponents/CupSvg";
import Grid from "@mui/material/Grid";
const data = [
  {
    id: 4077,
    company_id: 451,
    broker_id: null,
    client_id: null,
    branche_id: null,
    public_id: "1",
    employee_id: 5240,
    source_id: "1",
    description: null,
    created_at: "2023-12-10T16:34:29.000000Z",
    updated_at: "2023-12-10T16:34:44.000000Z",
    created_by: 5240,
    status: 0,
    source: {
      id: 1,
      channel_id: 1,
      trigger: "msg",
      name: "Massage",
      hard: 50,
      created_at: "2023-10-20T11:23:57.000000Z",
      updated_at: "1970-01-01T00:00:00.000000Z",
      created_by: 0,
      status: 0,
      channel: {
        id: 1,
        icon: "fa fa-facebook",
        name: "Facebook",
        color: "#4267b2",
        manegment: 3000,
        minSpending: 10000,
        maxSpending: 1000000,
        type: "1",
        shareApi: "https://www.facebook.com/sharer/sharer.php?u=",
        created_at: "2019-03-11T13:00:00.000000Z",
        updated_at: "2019-03-11T13:00:00.000000Z",
      },
    },
    lastfeed: {
      id: 2898,
      customer_id: 4077,
      interest_id: null,
      type_id: 30,
      description: null,
      date: null,
      created_at: "2023-12-10T16:38:49.000000Z",
      updated_at: "2023-12-10T16:38:49.000000Z",
      created_by: 5240,
      status: 0,
      by: {
        id: 5240,
        name: "Kareem",
        email: "kareem@ask.com",
        phone: "(+20) 120-340-3430",
        gender: null,
        military: null,
        birth: null,
        status: 0,
        shortlink: null,
        confirmation_code: null,
        verification_code: null,
        last_seen: "2023-12-19 16:41:02",
        created_at: "2023-12-09T23:09:56.000000Z",
        updated_at: "2023-12-19T14:39:02.000000Z",
        created_by: 5240,
        country_id: null,
        profile: [],
        paragraphs: [
          {
            id: 4228,
            for: "public",
            trigger: "name",
            trigger_id: 5240,
            lang_id: 2,
            content: "Kareem",
            limit: 100,
            created_at: "2023-12-09T23:09:56.000000Z",
            updated_at: "2023-12-09T23:09:56.000000Z",
            created_by: 5240,
            approved_by: 0,
            status: 0,
          },
        ],
      },
    },
    interests: [
      {
        id: 2875,
        customer_id: 4077,
        invoice_id: null,
        module_id: null,
        trigger: "request",
        trigger_id: null,
        term_id: null,
        values:
          '{"types":1,"finishs":1,"category":null,"budget":[],"floor":null,"rooms":null,"needs":null,"cities":null,"companies":null,"projects":null,"spaces":[0,430]}',
        created_at: "2023-12-10T16:35:47.000000Z",
        updated_at: "2023-12-10T16:35:47.000000Z",
        created_by: 5240,
        status: 1,
      },
      {
        id: 2876,
        customer_id: 4077,
        invoice_id: null,
        module_id: null,
        trigger: "space",
        trigger_id: 1340,
        term_id: null,
        values: null,
        created_at: "2023-12-10T16:36:24.000000Z",
        updated_at: "2023-12-10T16:36:24.000000Z",
        created_by: 5240,
        status: 0,
      },
    ],
    broker: null,
    employee: {
      id: 5240,
      name: "Kareem",
      email: "kareem@ask.com",
      phone: "(+20) 120-340-3430",
      gender: null,
      military: null,
      birth: null,
      status: 0,
      shortlink: null,
      confirmation_code: null,
      verification_code: null,
      last_seen: "2023-12-19 16:41:02",
      created_at: "2023-12-09T23:09:56.000000Z",
      updated_at: "2023-12-19T14:39:02.000000Z",
      created_by: 5240,
      country_id: null,
    },
    public: {
      id: 1,
      name: "Mohamed Hassan Shawa",
      email: "mhassan@digi-sail.com",
      phone: "+201001281110",
      gender: "1",
      military: "1",
      birth: "1991-11-29 15:00:00",
      status: 1,
      shortlink: "/Mohamed-Hassan-ShawaE3gkwdJdmBf",
      confirmation_code: null,
      verification_code: null,
      last_seen: "2023-12-18 12:27:29",
      created_at: "2022-12-20T02:58:07.000000Z",
      updated_at: "2023-12-18T10:27:29.000000Z",
      created_by: 1,
      country_id: null,
    },
  },
  {
    id: 4078,
    company_id: 451,
    broker_id: null,
    client_id: null,
    branche_id: null,
    public_id: "5208",
    employee_id: 5240,
    source_id: "2",
    description: null,
    created_at: "2023-12-10T16:42:30.000000Z",
    updated_at: "2023-12-10T16:42:34.000000Z",
    created_by: 5240,
    status: 0,
    source: {
      id: 2,
      channel_id: 1,
      trigger: "lf",
      name: "Lead Form",
      hard: 80,
      created_at: "2023-10-20T11:24:01.000000Z",
      updated_at: "1970-01-01T00:00:00.000000Z",
      created_by: 0,
      status: 0,
      channel: {
        id: 1,
        icon: "fa fa-facebook",
        name: "Facebook",
        color: "#4267b2",
        manegment: 3000,
        minSpending: 10000,
        maxSpending: 1000000,
        type: "1",
        shareApi: "https://www.facebook.com/sharer/sharer.php?u=",
        created_at: "2019-03-11T13:00:00.000000Z",
        updated_at: "2019-03-11T13:00:00.000000Z",
      },
    },
    lastfeed: {
      id: 2906,
      customer_id: 4078,
      interest_id: null,
      type_id: 39,
      description: null,
      date: "2023-12-12 18:47:00",
      created_at: "2023-12-10T16:44:15.000000Z",
      updated_at: "2023-12-10T16:47:42.000000Z",
      created_by: 5240,
      status: 0,
      by: {
        id: 5240,
        name: "Kareem",
        email: "kareem@ask.com",
        phone: "(+20) 120-340-3430",
        gender: null,
        military: null,
        birth: null,
        status: 0,
        shortlink: null,
        confirmation_code: null,
        verification_code: null,
        last_seen: "2023-12-19 16:41:02",
        created_at: "2023-12-09T23:09:56.000000Z",
        updated_at: "2023-12-19T14:39:02.000000Z",
        created_by: 5240,
        country_id: null,
        profile: [],
        paragraphs: [
          {
            id: 4228,
            for: "public",
            trigger: "name",
            trigger_id: 5240,
            lang_id: 2,
            content: "Kareem",
            limit: 100,
            created_at: "2023-12-09T23:09:56.000000Z",
            updated_at: "2023-12-09T23:09:56.000000Z",
            created_by: 5240,
            approved_by: 0,
            status: 0,
          },
        ],
      },
    },
    interests: [
      {
        id: 2877,
        customer_id: 4078,
        invoice_id: null,
        module_id: null,
        trigger: "request",
        trigger_id: null,
        term_id: null,
        values:
          '{"types":1,"finishs":1,"category":null,"budget":[],"floor":null,"rooms":null,"needs":null,"cities":null,"companies":null,"projects":null,"spaces":[0,430]}',
        created_at: "2023-12-10T16:42:50.000000Z",
        updated_at: "2023-12-10T16:42:50.000000Z",
        created_by: 5240,
        status: 1,
      },
      {
        id: 2878,
        customer_id: 4078,
        invoice_id: null,
        module_id: null,
        trigger: "space",
        trigger_id: 1340,
        term_id: null,
        values: null,
        created_at: "2023-12-10T16:43:00.000000Z",
        updated_at: "2023-12-10T16:43:00.000000Z",
        created_by: 5240,
        status: 0,
      },
    ],
    broker: {
      id: 5208,
      name: "Test",
      email: null,
      phone: "+2011111111111",
      gender: null,
      military: null,
      birth: null,
      status: 0,
      shortlink: null,
      confirmation_code: null,
      verification_code: null,
      last_seen: null,
      created_at: "2023-10-14T15:01:37.000000Z",
      updated_at: "2023-10-14T15:01:37.000000Z",
      created_by: null,
      country_id: null,
    },
    employee: {
      id: 5240,
      name: "Kareem",
      email: "kareem@ask.com",
      phone: "(+20) 120-340-3430",
      gender: null,
      military: null,
      birth: null,
      status: 0,
      shortlink: null,
      confirmation_code: null,
      verification_code: null,
      last_seen: "2023-12-19 16:41:02",
      created_at: "2023-12-09T23:09:56.000000Z",
      updated_at: "2023-12-19T14:39:02.000000Z",
      created_by: 5240,
      country_id: null,
    },
    public: {
      id: 5208,
      name: "Test",
      email: null,
      phone: "+2011111111111",
      gender: null,
      military: null,
      birth: null,
      status: 0,
      shortlink: null,
      confirmation_code: null,
      verification_code: null,
      last_seen: null,
      created_at: "2023-10-14T15:01:37.000000Z",
      updated_at: "2023-10-14T15:01:37.000000Z",
      created_by: null,
      country_id: null,
    },
  },
];
export const CustomerStageOne = () => {
  const [statusColor, setStatusColor] = useState("#B9E6BB");
  return (
    <div className="SpaceStageOne my-2">
      {data.map((record) => (
        <Grid container spacing={0} style={{ borderRadius: "10px" }}>
          <Grid xs={11}>
            <Grid container spacing={0}>
              <Grid
                className="SpaceStageOneGridLineOne"
                style={{
                  backgroundColor: `${statusColor}`,
                //   textAlign: "center",
                }}
                xs={12}
              >
                <div className="row">
                  {record.broker && (
                    <div className="col-6">{record.broker.name}</div>
                  )}
                  {record.public && (
                    <div className="col-6">{record.public.name}</div>
                  )}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            className="d-flex flex-column justify-content-center align-items-center"
            xs={1}
            style={{ backgroundColor: `${statusColor}`, textAlign: "center" }}
          >
            <div className="d-flex flex-column justify-content-center align-items-start">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LibraryAddCheckIcon"
              >
                <path d="M20 2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7.53 12L9 10.5l1.4-1.41 2.07 2.08L17.6 6 19 7.41 12.47 14zM4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6z"></path>
              </svg>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <svg
                class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="LaunchIcon"
              >
                <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
              </svg>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

const CustomerComponent = () => {
  return (
    <div style={{ margin: " 1rem 0.5rem" }}>
      <div
        className="row"
        style={{ margin: 0, backgroundColor: "black", color: "white" }}
      >
        <div className="SpacesCheckbox" style={{ width: "7%" }}>
          <Checkbox
            style={{ marginRight: 8, color: "white", height: "30px" }}
          />
        </div>
        <div className="SpaceWord" style={{ width: "85%" }}>
          <span>customer</span>
        </div>
        <div className="SpacesCupSvg" style={{ width: "7%" }}>
          <CupSvg />
        </div>
      </div>
      <CustomerStageOne />
      <CustomerStageOne />
      <CustomerStageOne />
    </div>
  );
};

export default CustomerComponent;
