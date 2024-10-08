#include<bits/stdc++.h>
using namespace std;

/*


Constructors - Special function with same name as class name

Always Use Initializer List wherever Possible !!!

*/

class Point {
    private:
        int x, y;
    public:
        int z = 10;
        // Point() {
        //     x = 0;
        //     y = 0;
        // }

        //Initializer List
        Point() : x(10), y(10) {}
         
        Point(int x1,int y1) {
            x = x1;
            y = y1;
        }
        void print() {
            cout << x << " " << y << endl;
        }
};

int main() {
    Point p;
    Point p1(10, 20);
    p.print();
    p1.print();
    // cout << (*p)->z << endl;
    return 0;
}