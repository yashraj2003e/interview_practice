#include<bits/stdc++.h>
using namespace std;


/*

There can only be one destructor in a class !

When there are multiple objects in same scope,

it is destructed in the reverse order !!!


If you have a class which has dynamically allocated memory
in the constructor,

you should write your own destructor !!!


*/

class Test {
    int x;
public:
    Test(int x) : x(x) {cout << "Constructor is Called for value => "<<x<< endl;}
  
        ~Test() {
            cout << "Destructor is Called for value => "<<x<<endl;
        }
};

int main() {
    if(1==1) {
        Test t(1);
    }
    Test t1(2);
    /*
    
    When there are multiple objects in same scope,
    it is destructed in the reverse order !!!
    */

    Test t(10);
    Test t1(20);
}