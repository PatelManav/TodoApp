#include<bits/stdc++.h>

using namespace std;

typedef long long int ll;
#define EPS 10e-7

//struct point { double x, y;
//point() { x = y = 0.0; }
//point(double _x, double _y) : x(_x), y(_y) {}
//// use EPS (1e-9) when testing equality of two floating points
//bool operator == (point other) const {
//return (fabs(x - other.x) < EPS && (fabs(y - other.y) < EPS)); } };


struct point { double x, y;
point() { x = y = 0.0; }
point(double _x, double _y) : x(_x), y(_y) {}
bool operator < (point other) const { // override less than operator
if (fabs(x - other.x) > EPS) // useful for sorting
return x < other.x; // first criteria , by x-coordinate
return y < other.y; } }; // second criteria, by y-coordinate
//
//
//
//// struct point_i { int x, y; }; // basic raw form, minimalist mode
//struct point_i { int x, y; // whenever possible, work with point_i
//point_i() { x = y = 0; } // default constructor
//point_i(int _x, int _y) : x(_x), y(_y) {} }; // user-defined
//struct point { double x, y; // only used if more precision is needed
//point() { x = y = 0.0; } // default constructor
//point(double _x, double _y) : x(_x), y(_y) {} }; // user-defined


double dist(point p1, point p2) { // Euclidean distance
// hypot(dx, dy) returns sqrt(dx * dx + dy * dy)
return hypot(p1.x - p2.x, p1.y - p2.y); } // return double

//// rotate p by theta degrees CCW w.r.t origin (0, 0)
//point rotate(point p, double theta) {
//double rad = DEG_to_RAD(theta); // multiply theta with PI / 180.0
//return point(p.x * cos(rad) - p.y * sin(rad),
//p.x * sin(rad) + p.y * cos(rad)); }


vector<point> CH(vector<point> P) { // the content of P may be reshuffled
int i, j, n = (int)P.size();
if (n <= 3) {
if (!(P[0] == P[n-1])) P.push_back(P[0]); // safeguard from corner case
return P; } // special case, the CH is P itself
// first, find P0 = point with lowest Y and if tie: rightmost X
int P0 = 0;
for (i = 1; i < n; i++)
if (P[i].y < P[P0].y || (P[i].y == P[P0].y && P[i].x > P[P0].x))
P0 = i;
point temp = P[0]; P[0] = P[P0]; P[P0] = temp; // swap P[P0] with P[0]
// second, sort points by angle w.r.t. pivot P0
pivot = P[0]; // use this global variable as reference
sort(++P.begin(), P.end(), angleCmp); // we do not sort P[0]
// to be continued
vector<point> S;
S.push_back(P[n-1]); S.push_back(P[0]); S.push_back(P[1]); // initial S
i = 2; // then, we check the rest
while (i < n) { // note: N must be >= 3 for this method to work
j = (int)S.size()-1;
if (ccw(S[j-1], S[j], P[i])) S.push_back(P[i++]); // left turn, accept
else S.pop_back(); } // or pop the top of S until we have a left turn
return S; } // return the result
void solve()
{
	int n, q;
	cin >> n >> q;
	
	
}

int main()
{
	int t = 1;
	cin >> t;
	while(t--)
	{
		solve();
	}
	return 0;
}

