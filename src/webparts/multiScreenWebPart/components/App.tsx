import * as React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Screen1 } from './Screen1';
import { Screen2 } from './Screen2';
import { Header } from './Header';
import { Product } from './Product';
import * as styles from './App.module.scss';
import { UserProfile } from '../services/UserProfile';
import { Config } from '../../config';

const s = styles.default;
const data = [
  {
    activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
    inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
  },
  {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 },
 {
   activeUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-true.png",
   inactiveUrl: "https://prudentialus.sharepoint.com/sites/horizonengx/SiteAssets/Badges/cicd-badge-false.png"
 }
];

export class App extends React.Component<{}, { profileImageUrl: string, displayName: string,  badgeRows: any[] }> {
  constructor(props) {
    super(props);
    this.state = { 
      profileImageUrl: '',
     displayName: '',
     badgeRows: []
     }
  }
  componentDidMount() {
    var userProfile = new UserProfile();
    userProfile
      .getCurrentUser()
      .then(user => {
        console.log(user)
        this.setState({ profileImageUrl: `${Config.siteUrl}/_layouts/15/userphoto.aspx?size=L&username=${user.Email}`, displayName: user.DisplayName });
      });

      let tempArray = [];
      const badgeRows = [];
      data.map((badge, i) => {
        if (i % 5 === 0 && i !== 0) {
          badgeRows.push(tempArray);
          tempArray = [];
        }
        tempArray.push(badge);
        if(data.length == i + 1) {
          badgeRows.push(tempArray);
        }
      });
      this.setState({badgeRows: badgeRows});
  }
  public render(): React.ReactElement<{}> {
    return (
      <Router>
        <div className={s.app}>
          <div className={`${s.container} ${s.textCenter}`}>
            <div className={s.row}>
              <div className={`${s.column} ${s['column-33']}`}>
                <h3>Your XP Total</h3>

                <div className={s.row}>
                  <div className={`${s.column} ${s.textCenter}`}>
                    <div className={s.height150}>
                      <img src={this.state.profileImageUrl} className={`${s.rounded} ${s.shadow}`} />
                    </div>
                    <div className={s.xpPointsText}>{this.state.displayName}</div>
                  </div>
                  <div className={`${s.column} ${s.textCenter}`}>
                    <div className={`${s.xpPointsNumber} ${s.height150}`}>10</div>
                    <div className={s.xpPointsText}>XP points</div>
                  </div>
                </div>
              </div>
              <div className={s.column}>
                <h3>Update Your Profile</h3>
                {this.state.badgeRows && this.state.badgeRows.map((row, idx1) => {
                  return (
                    <div key={idx1} className={s.row}>
                       {row.map((badge, idx2) => {
                         return (
                            <div key={idx2} className={`${s.column}`}>
                                <a href="" >
                                  <img src={badge.activeUrl} className={s.badge} />
                                </a>
                            </div>
                          )
                         })
                        }
                    </div>
                  )})
                }
              </div>
            </div>
          </div>

          <Header />

          {/* The different screens will be re-rendered here */}

          <Route path="/screen1" component={Screen1} />
          <Route path="/screen2" component={Screen2} />
          <Route path="/products/:id" component={Product} />

          <div>Footer</div>
        </div>
      </Router >
    );
  }
}
